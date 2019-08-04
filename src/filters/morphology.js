const { createAppend } = require('../util/createAppend')
const { getCounter } = require('../util/getCounter')
const counter = getCounter()

module.exports.morphology = function morphology(radius = 0, attr = {}) {
    return createAppend('feMorphology', {
        radius: Math.abs(radius),
        operator: radius >= 0 ? 'dilate' : 'erode',
        result: `morphology-${counter('result')}`,
        ...attr
    })
}
