const { setAttributes } = require('../util/setAttributes')
const { getCounter } = require('../util/getCounter')
const counter = getCounter()

module.exports.convolveMatrix = function convolveMatrix(values, attr) {
    return parent => parent.append('feConvolveMatrix')
        .attr('kernelMatrix', values)
        .attr('result', `convolved-${counter()}`)
        .call(feConvolveMatrixD3Node => setAttributes(feConvolveMatrixD3Node, attr))
}
