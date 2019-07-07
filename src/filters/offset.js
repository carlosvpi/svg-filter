import { passAttributes } from 'utils/pass_attributes'

const counter = (value => () => value++)(0)

export default function offset(dx = 0, dy = 0, attr = {}) {
    return parent => parent.append('feOffset')
        .attr('dx', dx)
        .attr('dy', dy)
        .attr('result', `offset-${counter('result')}`)
        .call(feOffsetD3Node => passAttributes(feOffsetD3Node, attr))
}
