const { setAttributes } = require('../util/setAttributes')
const { getCounter } = require('../util/getCounter')
const counter = getCounter()

module.exports.blur = function blur(stdDeviation = 5, attr) {
    return parent => {
    	gaussianBlurNode = document.createElementNS("http://www.w3.org/2000/svg", 'feGaussianBlur')
    	parent.append(gaussianBlurNode)
    	setAttributes(gaussianBlurNode, {
	        'stdDeviation': stdDeviation,
	        'result': `blurred-${counter('result')}`,
	        ...attr
    	})
    }
}
