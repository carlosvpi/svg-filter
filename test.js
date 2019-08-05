// https://meowni.ca/posts/2017-puppeteer-tests/

const puppeteer = require('puppeteer')
const { expect } = require('chai')
const { startServer } = require('polyserve')
const pixelmatch = require('pixelmatch')
const { PNG } = require('pngjs')
const fs = require('fs')
const del = require('del')
const getGoldenFile = route => `test/${route}/golden.png`

async function takeAndCompareScreenshot(page, route) {
  const url = `test/${route}/index.html`
  const tmpFile = `test/${route}/tmp.png`
  const goldenFile = getGoldenFile(route)
  const isGoldenThere = fs.existsSync(goldenFile)

  await page.goto(`http://127.0.0.1:4000/${url}`)
  await page.screenshot({ path: isGoldenThere ? tmpFile : goldenFile })

  if (!isGoldenThere) {
    console.log(`Created snapshot for "${route}"`)
  }

  return !isGoldenThere
    ? new Promise((resolve) => resolve())
    : new Promise((resolve, reject) => {
      const img1 = fs.createReadStream(tmpFile).pipe(new PNG()).on('parsed', doneReading)
      const img2 = fs.createReadStream(goldenFile).pipe(new PNG()).on('parsed', doneReading)

      let filesRead = 0

      function doneReading() {
        if (++filesRead < 2) return

        expect(img1.width, 'image widths are the same').equal(img2.width)
        expect(img1.height, 'image heights are the same').equal(img2.height)

        const diff = new PNG({ width: img1.width, height: img2.height })
        const numDiffPixels = pixelmatch(
            img1.data, img2.data, diff.data, img1.width, img1.height,
            { threshold: 0.1 })

        expect(numDiffPixels, 'number of different pixels').equal(0)
        if (numDiffPixels == 0) {
            del([tmpFile])
        }
        resolve()
      }
    })
}

describe('test', function() {
  let polyserve, browser, page

  before(async function() {
    polyserve = await startServer({ port: 4000 })
  })

  after((done) => {
    polyserve.close(done)
    console.log('Closing server')
  })

  beforeEach(async function() {
    browser = await puppeteer.launch()
    page = await browser.newPage()
  })

  afterEach(() => browser.close())

  describe('svg-filter', function() {
    beforeEach(async function() {
      return page.setViewport({ width: 800, height: 600 })
    })

    const argvFiles = process.argv.slice(3)
      .filter((file) => file !== '--updateSnapshots')
    const allFiles = fs.readdirSync('./test', { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(({ name }) => name)
    const files = argvFiles.length === 0 ? allFiles : argvFiles
    const shouldUpdateSnapshots = process.argv.includes('--updateSnapshots')
    if (shouldUpdateSnapshots) {
      del(files.map(getGoldenFile))
    }

    files.forEach((file) => it(file, async function() {
        try {
          return takeAndCompareScreenshot(page, file)
        } catch (e) {
          console.error(e)
        }
      }))
  })
})