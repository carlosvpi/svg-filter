import { passAttributes } from 'utils/pass_attributes'

const counter = (value => () => value++)(0)

export default function morphology(radius = 0, attr = {}) {
    return parent => parent.append('feMorphology')
        .attr('radius', Math.abs(radius))
        .attr('operator', radius >= 0 ? 'dilate' : 'erode')
        .attr('result', `morphology-${counter('result')}`)
        .call(feMorhologyD3Node => passAttributes(feMorhologyD3Node, attr))
}
