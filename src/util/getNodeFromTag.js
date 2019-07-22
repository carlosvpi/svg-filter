export const getNodeFromTagName = (parent = document.getElementsByTagName('body')[0]) => (tagName) => {
	let node = parent.getElementsByTagName(tagName)[0]
	if (!node) {
		node = document.createElement(tagName)
		parent.appendChild(node)
	}
	return node
}