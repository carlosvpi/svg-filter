import { passAttributes } from 'utils/pass_attributes'

const counter = (value => () => value++)(0)

export default function stop(offset, stopColor, stopOpacity = 1, attr = {}) {
    return parent => parent.append('stop')
        .attr('offset', offset)
        .attr('stop-color', stopColor)
        .attr('stop-opacity', stopOpacity)
        .call(feStopD3Node => passAttributes(feStopD3Node, attr))
}
