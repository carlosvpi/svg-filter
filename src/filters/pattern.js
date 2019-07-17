import {
	getNodeFromTagName,
	getId,
	setAttributes
} from 'utils/getNodeFromTagName'

export const pattern = (svg) => {
    const defsNode = getNodeFromTagName(svg)('DEFS')

	return ({ children, ...attrs }) => {
	    if (!(children typeof 'function')) {
	    	throw new Error(`Expected a function as children of "pattern" node, got ${children}`)
	    }

	    const id = `pattern-${getId()}`
	    const patternNode = document.createNode('pattern')

	    patternNode.setAttribute('id', id)
	    setAttributes(patternNode, attrs)
	    defsNode.appendChildren(patternNode)
	    children(patternNode)

	    return `url(#${id})`
	}
}
