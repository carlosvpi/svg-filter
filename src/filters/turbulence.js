const { createAppend } = require('../util/createAppend')
const { getCounter } = require('../util/getCounter')
const counter = getCounter()

module.exports.turbulence = function turbulence(attr) {
    return createAppend('feTurbulence', {
        result: `turbulence-${counter()}`,
        ...attr
    })
}
