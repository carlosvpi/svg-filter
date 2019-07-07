import { passAttributes } from 'utils/pass_attributes'

const counter = (value => () => value++)(0)

export function blendOnSource(toBeBlended, mode = 'normal', attr = {}) {
    return parent => {
        const blendedNodeResult = toBeBlended(parent).attr('result')

        parent.append('feBlend')
            .attr('in', 'SourceGraphic')
            .attr('in2', blendedNodeResult)
            .attr('mode', mode)
            .attr('result', `blended-${counter()}`)
            .call(feBlendD3Node => passAttributes(feBlendD3Node, attr))
    }
}

export function blendSourceOn(toBeBlended, mode = 'normal', attr = {}) {
    return parent => {
        const blendedNodeResult = toBeBlended(parent).attr('result')

        parent.append('feBlend')
            .attr('in2', 'SourceGraphic')
            .attr('in', blendedNodeResult)
            .attr('mode', mode)
            .attr('result', `blended-${counter()}`)
            .call(feBlendD3Node => passAttributes(feBlendD3Node, attr))
    }
}
