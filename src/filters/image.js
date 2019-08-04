const { createAppend } = require('../util/createAppend')
const { getCounter } = require('../util/getCounter')
const counter = getCounter()

module.exports.image = function image(href, attr) {
    return createAppend('feImage', {
        href,
        result: `image-${counter()}`,
        ...attr
    })
}
