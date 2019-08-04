const { createAppend } = require('../util/createAppend')
const { getCounter } = require('../util/getCounter')
const counter = getCounter()

module.exports.blendOnSource = function blendOnSource(subject, { mode = 'normal', ...attrs } = {}) {
    return (parent) => createAppend('feBlend', {
        in: 'SourceGraphic',
        in2: subject(parent).getAttribute('result'),
        mode: mode,
        result: `blended-${counter()}`,
        ...attrs
    })(parent)
}

module.exports.blendSourceOn = function blendSourceOn(subject, { mode = 'normal', ...attrs } = {}) {
    return (parent) => createAppend('feBlend', {
        in2: 'SourceGraphic',
        in: subject(parent).getAttribute('result'),
        mode: mode,
        result: `blended-${counter()}`,
        ...attrs
    })(parent)
}
