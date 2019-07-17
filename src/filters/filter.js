import {
	getNodeFromTagName,
	getId,
	setAttributes
} from 'utils/getNodeFromTagName'

export const filter = (svg) => {
    const defsNode = getNodeFromTagName(svg)('DEFS')

	return ({ children, ...attrs }) => {
	    const id = `filter-${getId()}`
	    const filterNode = document.createNode('filter')

	    filterNode.setAttribute('id', id)
	    setAttributes(filterNode, attrs)
	    defsNode.appendChildren(filterNode)
	    children.forEach(child => child(filterNode))

	    return `url(#${id})`
	}
}
