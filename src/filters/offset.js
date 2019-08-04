const { createAppend } = require('../util/createAppend')
const { getCounter } = require('../util/getCounter')
const counter = getCounter()

module.exports.offset = function offset(dx = 0, dy = 0, attr = {}) {
    return createAppend('feOffset', {
        dx: dx,
        dy: dy,
        result: `offset-${counter('result')}`,
        ...attr
    })
}
