import { passAttributes } from 'utils/pass_attributes'

const counter = (value => () => value++)(0)

export default function convolveMatrix(values, attr) {
    return parent => parent.append('feConvolveMatrix')
        .attr('kernelMatrix', values)
        .attr('result', `convolved-${counter()}`)
        .call(feConvolveMatrixD3Node => passAttributes(feConvolveMatrixD3Node, attr))
}
