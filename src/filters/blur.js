const { createAppend } = require('../util/createAppend')
const { getCounter } = require('../util/getCounter')
const counter = getCounter()

module.exports.blur = function blur(stdDeviation = 5, attr) {
	return createAppend('feGaussianBlur', {
        stdDeviation,
        result: `blurred-${counter('result')}`,
        ...attr
    })
}
