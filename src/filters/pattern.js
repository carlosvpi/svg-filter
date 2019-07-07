import { selectOrAppend } from 'utils/select_or_append'
import { passAttributes } from 'utils/pass_attributes'

export default function pattern(svg, patternFunction, attr = {}) {
    const defs = selectOrAppend(svg, 'defs')
    const id = `radial-gradient-${Math.random().toString(36).substr(2, 9)}`
    const patternD3Node = defs.append('pattern').attr('id', id)

    passAttributes(patternD3Node, attr)
    patternFunction(patternD3Node)

    return `url(#${id})`
}
