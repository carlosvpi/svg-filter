const { setAttributes } = require('../util/setAttributes')
const { getNodeFromTag } = require('../util/getNodeFromTag')
const { getId } = require('../util/getNodeFromTag')

module.exports.linearGradient = (svg) => {
    const defsNode = getNodeFromTag(svg)('DEFS')

	return ({ children, ...attrs }) => {
	    const id = `linear-gradient-${getId()}`
	    const linearGradientNode = document.createElementNS("http://www.w3.org/2000/svg", 'linearGradient')

	    linearGradientNode.setAttribute('id', id)
	    setAttributes(linearGradientNode, attrs)
	    defsNode.appendChild(linearGradientNode)
	    children.forEach(stop => stop(linearGradientNode))

	    return `url(#${id})`
	}
}