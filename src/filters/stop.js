const { setAttributes } = require('../util/setAttributes')
const { getCounter } = require('../util/getCounter')
const counter = getCounter()

module.exports.stop = function stop(offset, stopColor, stopOpacity = 1, attr = {}) {
    return parent => parent.append('stop')
        .attr('offset', offset)
        .attr('stop-color', stopColor)
        .attr('stop-opacity', stopOpacity)
        .call(feStopD3Node => setAttributes(feStopD3Node, attr))
}
