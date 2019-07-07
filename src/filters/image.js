import { passAttributes } from 'utils/pass_attributes'

const counter = (value => () => value++)(0)

export default function image(xlink, attr) {
    return parent => parent.append('feImage')
        .attr('xlink:href', xlink)
        .attr('result', `image-${counter()}`)
        .call(feImageD3Node => passAttributes(feImageD3Node, attr))
}
