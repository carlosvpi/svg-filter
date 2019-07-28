module.exports = {
	...require('./filters/blend'),
	...require('./filters/blur'),
	...require('./filters/color_matrix'),
	...require('./filters/composite'),
	...require('./filters/convolve_matrix'),
	...require('./filters/filter'),
	...require('./filters/flood'),
	...require('./filters/image'),
	...require('./filters/linear_gradient'),
	...require('./filters/merge'),
	...require('./filters/morphology'),
	...require('./filters/offset'),
	...require('./filters/pattern'),
	...require('./filters/radial_gradient'),
	...require('./filters/stop'),
	...require('./filters/turbulence')
}

if (typeof window !== 'undefined') {
	svgFilters = module.exports
}