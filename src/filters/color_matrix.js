import { passAttributes } from 'utils/pass_attributes'

const counter = (value => () => value++)(0)

export default function colorMatrix(values, attr) {
    return parent => parent.append('feColorMatrix')
        .attr('values', values)
        .attr('result', `colored-${counter()}`)
        .call(feColorMatrixD3Node => passAttributes(feColorMatrixD3Node, attr))
}
