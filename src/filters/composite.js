const { setAttributes } = require('../util/setAttributes')
const { getCounter } = require('../util/getCounter')
const counter = getCounter()

module.exports.compositeOnSource = function compositeOnSource(toBeComposed, operator = 'in', attr = {}) {
    return parent => {
        const composedNodeResult = toBeComposed(parent).attr('result')

        parent.append('feComposite')
            .attr('in', 'SourceGraphic')
            .attr('in2', composedNodeResult)
            .attr('operator', operator)
            .attr('result', `composite-${counter()}`)
            .call(feCompositeD3Node => setAttributes(feCompositeD3Node, attr))
    }
}

module.exports.compositeSourceOn = function compositeSourceOn(toBeComposed, operator = 'in', attr = {}) {
    return parent => {
        const composedNodeResult = toBeComposed(parent).attr('result')

        parent.append('feComposite')
            .attr('in2', 'SourceGraphic')
            .attr('in', composedNodeResult)
            .attr('operator', operator)
            .attr('result', `composite-${counter()}`)
            .call(feCompositeD3Node => setAttributes(feCompositeD3Node, attr))
    }
}
