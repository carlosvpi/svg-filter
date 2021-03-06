const { getNodeFromTag } = require('../util/getNodeFromTag')
const { getId } = require('../util/getId')
const { setAttributes } = require('../util/setAttributes')

module.exports.filter = (svg) => {
    return (...args) => {
    	const children = args.filter((arg) => typeof arg === 'function')
    	const attrs = args.filter((arg) => typeof arg === 'object').reduce((acc, arg) => ({ ...acc, ...arg }), {})
        const id = `filter-${getId()}`
        const filterNode = document.createElementNS('http://www.w3.org/2000/svg', 'filter')

        filterNode.setAttribute('id', id)
        setAttributes(filterNode, attrs)
        svg.appendChild(filterNode)
        children.forEach(child => child(filterNode))

        return `url(#${id})`
    }
}
