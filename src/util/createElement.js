module.exports.createElement = (tagName, attrs) => {
	const node = document.createElementNS('http://www.w3.org/2000/svg', tagName)

	for (let name in attrs) {
		node.setAttribute(name, attrs[name])
	}

	return node
}