import * as d3  from 'd3'
import { passAttributes } from 'utils/pass_attributes'

const counter = (value => () => value++)(0)

export default function merge(childrenFilters, attr) {
    return parent => parent.append('feMerge')
        .attr('result', `merged-${counter()}`)
        .call(feMergeD3Node => passAttributes(feMergeD3Node, attr))
        .selectAll('feMergeNode')
        .data(childrenFilters)
        .enter()
        .append('feMergeNode')
        .each(function(childFilter) {
            d3.select(this).attr('in', childFilter(parent).attr('result'))
        })
}
