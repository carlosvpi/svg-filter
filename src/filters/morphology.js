const { setAttributes } = require('../util/setAttributes')
const { getCounter } = require('../util/getCounter')
const counter = getCounter()

module.exports.morphology = function morphology(radius = 0, attr = {}) {
    return parent => parent.append('feMorphology')
        .attr('radius', Math.abs(radius))
        .attr('operator', radius >= 0 ? 'dilate' : 'erode')
        .attr('result', `morphology-${counter('result')}`)
        .call(feMorhologyD3Node => setAttributes(feMorhologyD3Node, attr))
}
