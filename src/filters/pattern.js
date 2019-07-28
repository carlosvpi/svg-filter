const { setAttributes } = require('../util/setAttributes')
const { getNodeFromTag } = require('../util/getNodeFromTag')
const { getId } = require('../util/getNodeFromTag')

module.exports.pattern = (svg) => {
    const defsNode = getNodeFromTag(svg)('DEFS')

	return ({ children, ...attrs }) => {
	    if (!(typeof children === 'function')) {
	    	throw new Error(`Expected a function as children of "pattern" node, got ${children}`)
	    }

	    const id = `pattern-${getId()}`
	    const patternNode = document.createElementNS("http://www.w3.org/2000/svg", 'pattern')

	    patternNode.setAttribute('id', id)
	    setAttributes(patternNode, attrs)
	    defsNode.appendChild(patternNode)
	    children(patternNode)

	    return `url(#${id})`
	}
}
