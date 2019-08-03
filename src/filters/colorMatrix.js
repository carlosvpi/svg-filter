const { createAppend } = require('../util/createAppend')
const { getCounter } = require('../util/getCounter')
const counter = getCounter()

module.exports.colorMatrix = function colorMatrix(values, attr) {
    return createAppend('feColorMatrix', {
        result: `colored-${counter()}`,
        values: values,
        ...attr
    })
}
