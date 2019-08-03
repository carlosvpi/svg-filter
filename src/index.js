module.exports = {
	...require('./filters'),
	...require('./util')
}

if (typeof window !== 'undefined') {
	svgFilters = module.exports
}