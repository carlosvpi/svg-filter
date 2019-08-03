const { createAppend } = require('../util/createAppend')
const { getCounter } = require('../util/getCounter')
const counter = getCounter()

module.exports.convolveMatrix = function convolveMatrix(values, attr) {
    return createAppend('feConvolveMatrix', {
        kernelMatrix: values,
        result: `convolved-${counter()}`,
        ...attr
    })
}
