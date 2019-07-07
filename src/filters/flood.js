import { passAttributes } from 'utils/pass_attributes'

const counter = (value => () => value++)(0)

export default function flood(color, opacity = 1, attr = {}) {
    return parent => parent.append('feFlood')
        .attr('flood-color', color)
        .attr('flood-opacity', opacity)
        .attr('result', `flooded-${counter()}`)
        .call(feFloodD3Node => passAttributes(feFloodD3Node, attr))
}
