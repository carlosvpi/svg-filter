const { createAppend } = require('../util/createAppend')
const { getCounter } = require('../util/getCounter')
const counter = getCounter()

module.exports.flood = function flood(color, opacity = 1, attr = {}) {
    return createAppend('feFlood', {
        'flood-color': color,
        'flood-opacity': opacity,
        result: `flooded-${counter()}`,
        ...attr
    })
}
