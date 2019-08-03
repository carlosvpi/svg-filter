const { setAttributes } = require('../util/setAttributes')
const { getNodeFromTag } = require('../util/getNodeFromTag')
const { getId } = require('../util/getNodeFromTag')

module.exports.radialGradient = (svg) => {
    const defsNode = getNodeFromTag(svg)('DEFS')

	return ({ children, ...attrs }) => {
	    const id = `radial-gradient-${getId()}`
	    const radialGradientNode = document.createElementNS("http://www.w3.org/2000/svg", 'radialGradient')

	    radialGradientNode.setAttribute('id', id)
	    setAttributes(radialGradientNode, attrs)
	    defsNode.appendChild(radialGradientNode)
	    children.forEach(stop => stop(radialGradientNode))

	    return `url(#${id})`
	}
}