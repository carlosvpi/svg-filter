import { passAttributes } from 'utils/pass_attributes'

const counter = (value => () => value++)(0)

export default function blur(stdDeviation = 5, attr) {
    return parent => parent.append('feGaussianBlur')
        .attr('stdDeviation', stdDeviation)
        .attr('result', `blurred-${counter('result')}`)
        .call(feGaussianBlurD3Node => passAttributes(feGaussianBlurD3Node, attr))
}
