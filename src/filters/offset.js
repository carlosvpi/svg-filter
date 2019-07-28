const { setAttributes } = require('../util/setAttributes')
const { getCounter } = require('../util/getCounter')
const counter = getCounter()

module.exports.offset = function offset(dx = 0, dy = 0, attr = {}) {
    return parent => parent.append('feOffset')
        .attr('dx', dx)
        .attr('dy', dy)
        .attr('result', `offset-${counter('result')}`)
        .call(feOffsetD3Node => setAttributes(feOffsetD3Node, attr))
}
