module.exports.createAppend = (tagName, attrs) => (parent) => {
	const node = document.createElementNS('http://www.w3.org/2000/svg', tagName)

	for (let name in attrs) {
		node.setAttribute(name, attrs[name])
	}

	parent.appendChild(node)

	return node
}