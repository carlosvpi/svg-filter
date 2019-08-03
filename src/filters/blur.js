const { createElement } = require('../util/createElement')
const { getCounter } = require('../util/getCounter')
const counter = getCounter()

module.exports.blur = function blur(stdDeviation = 5, attr) {
    return parent => {
        parent.append(createElement('feGaussianBlur', {
            'stdDeviation': stdDeviation,
            'result': `blurred-${counter('result')}`,
            ...attr
        }))
    }
}
