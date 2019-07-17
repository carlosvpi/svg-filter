import {
	getNodeFromTagName,
	getId,
	setAttributes
} from 'utils/getNodeFromTagName'

export const radialGradient = (svg) => {
    const defsNode = getNodeFromTagName(svg)('DEFS')

	return ({ children, ...attrs }) => {
	    const id = `radial-gradient-${getId()}`
	    const radialGradientNode = document.createElement('radialGradient')

	    radialGradientNode.setAttribute('id', id)
	    setAttributes(radialGradientNode, attrs)
	    defsNode.appendChildren(radialGradientNode)
	    children.forEach(stop => stop(radialGradientNode))

	    return `url(#${id})`
	}
}