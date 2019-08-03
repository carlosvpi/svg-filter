const { createAppend } = require('../util/createAppend')

module.exports.stop = function stop(offset, stopColor, stopOpacity = 1, attr = {}) {
    return createAppend('stop', {
        offset,
        'stop-color': stopColor,
        'stop-opacity': stopOpacity,
        ...attr
    })
}
