import { passAttributes } from 'utils/pass_attributes'

const counter = (value => () => value++)(0)

export function compositeOnSource(toBeComposed, operator = 'in', attr = {}) {
    return parent => {
        const composedNodeResult = toBeComposed(parent).attr('result')

        parent.append('feComposite')
            .attr('in', 'SourceGraphic')
            .attr('in2', composedNodeResult)
            .attr('operator', operator)
            .attr('result', `composite-${counter()}`)
            .call(feCompositeD3Node => passAttributes(feCompositeD3Node, attr))
    }
}

export function compositeSourceOn(toBeComposed, operator = 'in', attr = {}) {
    return parent => {
        const composedNodeResult = toBeComposed(parent).attr('result')

        parent.append('feComposite')
            .attr('in2', 'SourceGraphic')
            .attr('in', composedNodeResult)
            .attr('operator', operator)
            .attr('result', `composite-${counter()}`)
            .call(feCompositeD3Node => passAttributes(feCompositeD3Node, attr))
    }
}
