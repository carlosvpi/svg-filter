import { passAttributes } from 'utils/pass_attributes'

const counter = (value => () => value++)(0)

export default function turbulence(attr) {
    return parent => parent.append('feTurbulence')
        .attr('result', `turbulence-${counter()}`)
        .call(feTurbulenceD3Node => passAttributes(feTurbulenceD3Node, attr))
}
