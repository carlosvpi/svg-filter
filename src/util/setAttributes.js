module.exports.setAttributes = (node, attrs) => {
	for (let name in attrs) {
		node.setAttribute(name, attrs[name])
		// node.setAttributeNS('http://www.w3.org/2000/svg', name, attrs[name])
	}

	return node
}