const { setAttributes } = require('../util/setAttributes')
const { getCounter } = require('../util/getCounter')
const counter = getCounter()

module.exports.turbulence = function turbulence(attr) {
    return parent => parent.append('feTurbulence')
        .attr('result', `turbulence-${counter()}`)
        .call(feTurbulenceD3Node => setAttributes(feTurbulenceD3Node, attr))
}
