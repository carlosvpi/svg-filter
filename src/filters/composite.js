const { createAppend } = require('../util/createAppend')
const { getCounter } = require('../util/getCounter')
const counter = getCounter()

module.exports.compositeOnSource = function compositeOnSource(toBeComposed, operator = 'in', attr = {}) {
    return (parent) => createAppend('feComposite', {
        in: 'SourceGraphic',
        in2: toBeComposed(parent).getAttribute('result'),
        operator: operator,
        result: `composite-${counter()}`,
        ...attr
    })(parent)
}

module.exports.compositeSourceOn = function compositeSourceOn(toBeComposed, operator = 'in', attr = {}) {
    return (parent) => createAppend('feComposite', {
        in2: 'SourceGraphic',
        in: toBeComposed(parent).getAttribute('result'),
        operator: operator,
        result: `composite-${counter()}`,
        ...attr
    })(parent)
}
