import { selectOrAppend } from 'utils/select_or_append'
import { passAttributes } from 'utils/pass_attributes'

export default function filter(svg, childrenFilters, attr = {}) {
    const defs = selectOrAppend(svg, 'defs')
    const id = `filter-${Math.random().toString(36).substr(2, 9)}`
    const filterD3Node = defs.append('filter').attr('id', id)

    passAttributes(filterD3Node, attr)
    childrenFilters.forEach(childFilter => childFilter(filterD3Node))

    return `url(#${id})`
}
