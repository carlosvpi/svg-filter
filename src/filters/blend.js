import {
    setAttributes,
    getCounter
} from 'utils/pass_attributes'


export function blendOnSource({ subject, mode = 'normal', ...attrs }) {
    const counter = getCounter()

    return (parent) => {
        const blendedNodeResult = subject(parent).getAttribute('result')
        const blendNode = document.createElement('feBlend')

        setAttribtues(blendNode, {
            'in': 'SourceGraphic',
            'in2': blendedNodeResult,
            'mode': mode,
            'result', `blended-${counter()}`,
            ...attrs
        })

        parent.appendChild(blendNode)
    }
}

export function blendSourceOn({ subject, mode = 'normal', attrs }) {
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
