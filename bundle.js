(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const { setAttributes } = require('../util/setAttributes')
const { getCounter } = require('../util/getCounter')

module.exports.blendOnSource = function blendOnSource({ subject, mode = 'normal', ...attrs }) {
    const counter = getCounter()

    return (parent) => {
        const blendedNodeResult = subject(parent).getAttribute('result')
        const blendNode = document.createElementNS("http://www.w3.org/2000/svg", 'feBlend')

        setAttributes(blendNode, {
            'in': 'SourceGraphic',
            'in2': blendedNodeResult,
            'mode': mode,
            'result': `blended-${counter()}`,
            ...attrs
        })

        parent.appendChild(blendNode)
    }
}

module.exports.blendSourceOn = function blendSourceOn({ subject, mode = 'normal', attrs }) {
    const counter = getCounter()

    return (parent) => {
        const blendedNodeResult = subject(parent).attr('result')

        parent.append('feBlend')
            .attr('in2', 'SourceGraphic')
            .attr('in', blendedNodeResult)
            .attr('mode', mode)
            .attr('result', `blended-${counter()}`)
            .call(feBlendD3Node => setAttributes(feBlendD3Node, attr))
    }
}

},{"../util/getCounter":18,"../util/setAttributes":21}],2:[function(require,module,exports){
const { setAttributes } = require('../util/setAttributes')
const { getCounter } = require('../util/getCounter')
const counter = getCounter()

module.exports.blur = function blur(stdDeviation = 5, attr) {
    return parent => {
    	gaussianBlurNode = document.createElementNS("http://www.w3.org/2000/svg", 'feGaussianBlur')
    	parent.append(gaussianBlurNode)
    	setAttributes(gaussianBlurNode, {
	        'stdDeviation': stdDeviation,
	        'result': `blurred-${counter('result')}`,
	        ...attr
    	})
    }
}

},{"../util/getCounter":18,"../util/setAttributes":21}],3:[function(require,module,exports){
const { setAttributes } = require('../util/setAttributes')
const { getCounter } = require('../util/getCounter')
const counter = getCounter()

module.exports.colorMatrix = function colorMatrix(values, attr) {
    return parent => parent.append('feColorMatrix')
        .attr('values', values)
        .attr('result', `colored-${counter()}`)
        .call(feColorMatrixD3Node => setAttributes(feColorMatrixD3Node, attr))
}

},{"../util/getCounter":18,"../util/setAttributes":21}],4:[function(require,module,exports){
const { setAttributes } = require('../util/setAttributes')
const { getCounter } = require('../util/getCounter')
const counter = getCounter()

module.exports.compositeOnSource = function compositeOnSource(toBeComposed, operator = 'in', attr = {}) {
    return parent => {
        const composedNodeResult = toBeComposed(parent).attr('result')

        parent.append('feComposite')
            .attr('in', 'SourceGraphic')
            .attr('in2', composedNodeResult)
            .attr('operator', operator)
            .attr('result', `composite-${counter()}`)
            .call(feCompositeD3Node => setAttributes(feCompositeD3Node, attr))
    }
}

module.exports.compositeSourceOn = function compositeSourceOn(toBeComposed, operator = 'in', attr = {}) {
    return parent => {
        const composedNodeResult = toBeComposed(parent).attr('result')

        parent.append('feComposite')
            .attr('in2', 'SourceGraphic')
            .attr('in', composedNodeResult)
            .attr('operator', operator)
            .attr('result', `composite-${counter()}`)
            .call(feCompositeD3Node => setAttributes(feCompositeD3Node, attr))
    }
}

},{"../util/getCounter":18,"../util/setAttributes":21}],5:[function(require,module,exports){
const { setAttributes } = require('../util/setAttributes')
const { getCounter } = require('../util/getCounter')
const counter = getCounter()

module.exports.convolveMatrix = function convolveMatrix(values, attr) {
    return parent => parent.append('feConvolveMatrix')
        .attr('kernelMatrix', values)
        .attr('result', `convolved-${counter()}`)
        .call(feConvolveMatrixD3Node => setAttributes(feConvolveMatrixD3Node, attr))
}

},{"../util/getCounter":18,"../util/setAttributes":21}],6:[function(require,module,exports){
const { getNodeFromTag } = require('../util/getNodeFromTag')
const { getId } = require('../util/getId')
const { setAttributes } = require('../util/setAttributes')

module.exports.filter = (svg) => {
	return ({ children, ...attrs }) => {
	    const id = `filter-${getId()}`
	    const filterNode = document.createElementNS("http://www.w3.org/2000/svg", 'filter')

	    filterNode.setAttribute('id', id)
	    setAttributes(filterNode, attrs)
	    svg.appendChild(filterNode)
	    children.forEach(child => child(filterNode))

	    return `url(#${id})`
	}
}

},{"../util/getId":19,"../util/getNodeFromTag":20,"../util/setAttributes":21}],7:[function(require,module,exports){
const { setAttributes } = require('../util/setAttributes')
const { getCounter } = require('../util/getCounter')
const counter = getCounter()

module.exports.flood = function flood(color, opacity = 1, attr = {}) {
    return parent => parent.append('feFlood')
        .attr('flood-color', color)
        .attr('flood-opacity', opacity)
        .attr('result', `flooded-${counter()}`)
        .call(feFloodD3Node => setAttributes(feFloodD3Node, attr))
}

},{"../util/getCounter":18,"../util/setAttributes":21}],8:[function(require,module,exports){
const { setAttributes } = require('../util/setAttributes')
const { getCounter } = require('../util/getCounter')
const counter = getCounter()

module.exports.image = function image(xlink, attr) {
    return parent => parent.append('feImage')
        .attr('xlink:href', xlink)
        .attr('result', `image-${counter()}`)
        .call(feImageD3Node => setAttributes(feImageD3Node, attr))
}

},{"../util/getCounter":18,"../util/setAttributes":21}],9:[function(require,module,exports){
const { setAttributes } = require('../util/setAttributes')
const { getNodeFromTag } = require('../util/getNodeFromTag')
const { getId } = require('../util/getNodeFromTag')

module.exports.linearGradient = (svg) => {
    const defsNode = getNodeFromTag(svg)('DEFS')

	return ({ children, ...attrs }) => {
	    const id = `linear-gradient-${getId()}`
	    const linearGradientNode = document.createElementNS("http://www.w3.org/2000/svg", 'linearGradient')

	    linearGradientNode.setAttribute('id', id)
	    setAttributes(linearGradientNode, attrs)
	    defsNode.appendChild(linearGradientNode)
	    children.forEach(stop => stop(linearGradientNode))

	    return `url(#${id})`
	}
}
},{"../util/getNodeFromTag":20,"../util/setAttributes":21}],10:[function(require,module,exports){
const { setAttributes } = require('../util/setAttributes')
const { getCounter } = require('../util/getCounter')
const counter = getCounter()

module.exports.merge = function merge(childrenFilters, attr) {
    return parent => parent.append('feMerge')
        .attr('result', `merged-${counter()}`)
        .call(feMergeD3Node => setAttributes(feMergeD3Node, attr))
        .selectAll('feMergeNode')
        .data(childrenFilters)
        .enter()
        .append('feMergeNode')
        .each(function(childFilter) {
            d3.select(this).attr('in', childFilter(parent).attr('result'))
        })
}

},{"../util/getCounter":18,"../util/setAttributes":21}],11:[function(require,module,exports){
const { setAttributes } = require('../util/setAttributes')
const { getCounter } = require('../util/getCounter')
const counter = getCounter()

module.exports.morphology = function morphology(radius = 0, attr = {}) {
    return parent => parent.append('feMorphology')
        .attr('radius', Math.abs(radius))
        .attr('operator', radius >= 0 ? 'dilate' : 'erode')
        .attr('result', `morphology-${counter('result')}`)
        .call(feMorhologyD3Node => setAttributes(feMorhologyD3Node, attr))
}

},{"../util/getCounter":18,"../util/setAttributes":21}],12:[function(require,module,exports){
const { setAttributes } = require('../util/setAttributes')
const { getCounter } = require('../util/getCounter')
const counter = getCounter()

module.exports.offset = function offset(dx = 0, dy = 0, attr = {}) {
    return parent => parent.append('feOffset')
        .attr('dx', dx)
        .attr('dy', dy)
        .attr('result', `offset-${counter('result')}`)
        .call(feOffsetD3Node => setAttributes(feOffsetD3Node, attr))
}

},{"../util/getCounter":18,"../util/setAttributes":21}],13:[function(require,module,exports){
const { setAttributes } = require('../util/setAttributes')
const { getNodeFromTag } = require('../util/getNodeFromTag')
const { getId } = require('../util/getNodeFromTag')

module.exports.pattern = (svg) => {
    const defsNode = getNodeFromTag(svg)('DEFS')

	return ({ children, ...attrs }) => {
	    if (!(typeof children === 'function')) {
	    	throw new Error(`Expected a function as children of "pattern" node, got ${children}`)
	    }

	    const id = `pattern-${getId()}`
	    const patternNode = document.createElementNS("http://www.w3.org/2000/svg", 'pattern')

	    patternNode.setAttribute('id', id)
	    setAttributes(patternNode, attrs)
	    defsNode.appendChild(patternNode)
	    children(patternNode)

	    return `url(#${id})`
	}
}

},{"../util/getNodeFromTag":20,"../util/setAttributes":21}],14:[function(require,module,exports){
const { setAttributes } = require('../util/setAttributes')
const { getNodeFromTag } = require('../util/getNodeFromTag')
const { getId } = require('../util/getNodeFromTag')

module.exports.radialGradient = (svg) => {
    const defsNode = getNodeFromTag(svg)('DEFS')

	return ({ children, ...attrs }) => {
	    const id = `radial-gradient-${getId()}`
	    const radialGradientNode = document.createElementNS("http://www.w3.org/2000/svg", 'radialGradient')

	    radialGradientNode.setAttribute('id', id)
	    setAttributes(radialGradientNode, attrs)
	    defsNode.appendChild(radialGradientNode)
	    children.forEach(stop => stop(radialGradientNode))

	    return `url(#${id})`
	}
}
},{"../util/getNodeFromTag":20,"../util/setAttributes":21}],15:[function(require,module,exports){
const { setAttributes } = require('../util/setAttributes')
const { getCounter } = require('../util/getCounter')
const counter = getCounter()

module.exports.stop = function stop(offset, stopColor, stopOpacity = 1, attr = {}) {
    return parent => parent.append('stop')
        .attr('offset', offset)
        .attr('stop-color', stopColor)
        .attr('stop-opacity', stopOpacity)
        .call(feStopD3Node => setAttributes(feStopD3Node, attr))
}

},{"../util/getCounter":18,"../util/setAttributes":21}],16:[function(require,module,exports){
const { setAttributes } = require('../util/setAttributes')
const { getCounter } = require('../util/getCounter')
const counter = getCounter()

module.exports.turbulence = function turbulence(attr) {
    return parent => parent.append('feTurbulence')
        .attr('result', `turbulence-${counter()}`)
        .call(feTurbulenceD3Node => setAttributes(feTurbulenceD3Node, attr))
}

},{"../util/getCounter":18,"../util/setAttributes":21}],17:[function(require,module,exports){
module.exports = {
	...require('./filters/blend'),
	...require('./filters/blur'),
	...require('./filters/color_matrix'),
	...require('./filters/composite'),
	...require('./filters/convolve_matrix'),
	...require('./filters/filter'),
	...require('./filters/flood'),
	...require('./filters/image'),
	...require('./filters/linear_gradient'),
	...require('./filters/merge'),
	...require('./filters/morphology'),
	...require('./filters/offset'),
	...require('./filters/pattern'),
	...require('./filters/radial_gradient'),
	...require('./filters/stop'),
	...require('./filters/turbulence')
}

if (typeof window !== 'undefined') {
	svgFilters = module.exports
}
},{"./filters/blend":1,"./filters/blur":2,"./filters/color_matrix":3,"./filters/composite":4,"./filters/convolve_matrix":5,"./filters/filter":6,"./filters/flood":7,"./filters/image":8,"./filters/linear_gradient":9,"./filters/merge":10,"./filters/morphology":11,"./filters/offset":12,"./filters/pattern":13,"./filters/radial_gradient":14,"./filters/stop":15,"./filters/turbulence":16}],18:[function(require,module,exports){
module.exports.getCounter = (initial = 0) => (value => () => value++)(initial)

},{}],19:[function(require,module,exports){
module.exports.getId = () => Math.random().toString(36).substr(2, 9)
},{}],20:[function(require,module,exports){
module.exports.getNodeFromTag = (parent = document.getElementsByTagName('body')[0]) => (tagName) => {
	let node = parent.getElementsByTagName(tagName)[0]
	if (!node) {
		node = document.createElementNS('http://www.w3.org/2000/svg', tagName)
		parent.appendChild(node)
	}
	return node
}
},{}],21:[function(require,module,exports){
module.exports.setAttributes = (node, attrs) => {
	for (let name in attrs) {
		node.setAttribute(name, attrs[name])
		// node.setAttributeNS('http://www.w3.org/2000/svg', name, attrs[name])
	}

	return node
}
},{}]},{},[17]);
