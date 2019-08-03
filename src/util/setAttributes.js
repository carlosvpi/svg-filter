module.exports.setAttributes = (node, attrs) => {
	for (let name in attrs) {
		node.setAttribute(name, attrs[name])
	}

	return node
}