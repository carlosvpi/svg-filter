const { getNodeFromTag } = require('../util/getNodeFromTag')
const { getId } = require('../util/getId')
const { setAttributes } = require('../util/setAttributes')

module.exports.pattern = (svg) => {
    return (...args) => {
    	const children = args.filter((arg) => typeof arg === 'function')
    	const attrs = args.filter((arg) => typeof arg === 'object').reduce((acc, arg) => ({ ...acc, ...arg }), {})
        const id = `patternNode-${getId()}`
        const patternNode = document.createElementNS('http://www.w3.org/2000/svg', 'pattern')

        patternNode.setAttribute('id', id)
        setAttributes(patternNode, attrs)
        svg.appendChild(patternNode)
        children.forEach(child => child(patternNode))

        return `url(#${id})`
    }
}
