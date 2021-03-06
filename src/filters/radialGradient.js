const { getNodeFromTag } = require('../util/getNodeFromTag')
const { getId } = require('../util/getId')
const { setAttributes } = require('../util/setAttributes')

module.exports.radialGradient = (svg) => {
    return (...args) => {
    	const children = args.filter((arg) => typeof arg === 'function')
    	const attrs = args.filter((arg) => typeof arg === 'object').reduce((acc, arg) => ({ ...acc, ...arg }), {})
        const id = `radial-gradient-${getId()}`
        const radialGradientNode = document.createElementNS('http://www.w3.org/2000/svg', 'radialGradient')

        radialGradientNode.setAttribute('id', id)
        setAttributes(radialGradientNode, attrs)
        svg.appendChild(radialGradientNode)
        children.forEach(stop => stop(radialGradientNode))

        return `url(#${id})`
    }
}
