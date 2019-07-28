const { setAttributes } = require('../util/setAttributes')
const { getCounter } = require('../util/getCounter')

module.exports.blendOnSource = function blendOnSource({ subject, mode = 'normal', ...attrs }) {
    const counter = getCounter()

    return (parent) => {
        const blendedNodeResult = subject(parent).getAttribute('result')
        const blendNode = document.createElementNS("http://www.w3.org/2000/svg", 'feBlend')

        setAttributes(blendNode, {
            'in': 'SourceGraphic',
            'in2': blendedNodeResult,
            'mode': mode,
            'result': `blended-${counter()}`,
            ...attrs
        })

        parent.appendChild(blendNode)
    }
}

module.exports.blendSourceOn = function blendSourceOn({ subject, mode = 'normal', attrs }) {
    const counter = getCounter()

    return (parent) => {
        const blendedNodeResult = subject(parent).attr('result')

        parent.append('feBlend')
            .attr('in2', 'SourceGraphic')
            .attr('in', blendedNodeResult)
            .attr('mode', mode)
            .attr('result', `blended-${counter()}`)
            .call(feBlendD3Node => setAttributes(feBlendD3Node, attr))
    }
}
