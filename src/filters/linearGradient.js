const { getNodeFromTag } = require('../util/getNodeFromTag')
const { getId } = require('../util/getId')
const { setAttributes } = require('../util/setAttributes')

module.exports.linearGradient = (svg) => {
    return (...args) => {
    	const children = args.filter((arg) => typeof arg === 'function')
    	const attrs = args.filter((arg) => typeof arg === 'object').reduce((acc, arg) => ({ ...acc, ...arg }), {})
        const id = `linear-gradient-${getId()}`
        const linearGradientNode = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient')

        linearGradientNode.setAttribute('id', id)
        setAttributes(linearGradientNode, attrs)
        svg.appendChild(linearGradientNode)
        children.forEach(stop => stop(linearGradientNode))

        return `url(#${id})`
    }
}