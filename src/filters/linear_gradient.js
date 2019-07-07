import * as d3  from 'd3'
import { selectOrAppend } from 'utils/select_or_append'
import { passAttributes } from 'utils/pass_attributes'

export default function linearGradient(svg, stops, attr = {}) {
    const defs = selectOrAppend(svg, 'defs')
    const id = `linear-gradient-${Math.random().toString(36).substr(2, 9)}`
    const linearGradientD3Node = defs.append('linearGradient').attr('id', id)

    passAttributes(linearGradientD3Node, attr)
    stops.forEach(stop => stop(linearGradientD3Node))

    return `url(#${id})`
}
