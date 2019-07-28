const { setAttributes } = require('../util/setAttributes')
const { getCounter } = require('../util/getCounter')
const counter = getCounter()

module.exports.colorMatrix = function colorMatrix(values, attr) {
    return parent => parent.append('feColorMatrix')
        .attr('values', values)
        .attr('result', `colored-${counter()}`)
        .call(feColorMatrixD3Node => setAttributes(feColorMatrixD3Node, attr))
}
