const { setAttributes } = require('../util/setAttributes')
const { getCounter } = require('../util/getCounter')
const counter = getCounter()

module.exports.image = function image(xlink, attr) {
    return parent => parent.append('feImage')
        .attr('xlink:href', xlink)
        .attr('result', `image-${counter()}`)
        .call(feImageD3Node => setAttributes(feImageD3Node, attr))
}
