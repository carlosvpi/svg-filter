module.exports.getNodeFromTag = (parent = document.getElementsByTagName('body')[0]) => (tagName) => {
	let node = parent.getElementsByTagName(tagName)[0]
	if (!node) {
		node = document.createElementNS('http://www.w3.org/2000/svg', tagName)
		parent.appendChild(node)
	}
	return node
}