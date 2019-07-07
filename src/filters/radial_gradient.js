import * as d3  from 'd3'
import { selectOrAppend } from 'utils/select_or_append'
import { passAttributes } from 'utils/pass_attributes'

export default function radialGradient(svg, stops, attr = {}) {
    const defs = selectOrAppend(svg, 'defs')
    const id = `radial-gradient-${Math.random().toString(36).substr(2, 9)}`
    const radialGradientD3Node = defs.append('radialGradient').attr('id', id)

    passAttributes(radialGradientD3Node, attr)
    stops.forEach(stop => stop(radialGradientD3Node))

    return `url(#${id})`
}
