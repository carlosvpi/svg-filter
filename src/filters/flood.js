const { setAttributes } = require('../util/setAttributes')
const { getCounter } = require('../util/getCounter')
const counter = getCounter()

module.exports.flood = function flood(color, opacity = 1, attr = {}) {
    return parent => parent.append('feFlood')
        .attr('flood-color', color)
        .attr('flood-opacity', opacity)
        .attr('result', `flooded-${counter()}`)
        .call(feFloodD3Node => setAttributes(feFloodD3Node, attr))
}
