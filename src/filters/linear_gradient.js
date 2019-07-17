import {
	getNodeFromTagName,
	getId,
	setAttributes
} from 'utils/getNodeFromTagName'

export const linearGradient = (svg) => {
    const defsNode = getNodeFromTagName(svg)('DEFS')

	return ({ children, ...attrs }) => {
	    const id = `linear-gradient-${getId()}`
	    const linearGradientNode = document.createElement('linearGradient')

	    linearGradientNode.setAttribute('id', id)
	    setAttributes(linearGradientNode, attrs)
	    defsNode.appendChildren(linearGradientNode)
	    children.forEach(stop => stop(linearGradientNode))

	    return `url(#${id})`
	}
}