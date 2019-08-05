(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const { createAppend } = require('../util/createAppend')
const { getCounter } = require('../util/getCounter')
const counter = getCounter()

module.exports.blendOnSource = function blendOnSource(subject, { mode = 'normal', ...attrs } = {}) {
    return (parent) => createAppend('feBlend', {
        in: 'SourceGraphic',
        in2: subject(parent).getAttribute('result'),
        mode: mode,
        result: `blended-${counter()}`,
        ...attrs
    })(parent)
}

module.exports.blendSourceOn = function blendSourceOn(subject, { mode = 'normal', ...attrs } = {}) {
    return (parent) => createAppend('feBlend', {
        in2: 'SourceGraphic',
        in: subject(parent).getAttribute('result'),
        mode: mode,
        result: `blended-${counter()}`,
        ...attrs
    })(parent)
}

},{"../util/createAppend":19,"../util/getCounter":21}],2:[function(require,module,exports){
const { createAppend } = require('../util/createAppend')
const { getCounter } = require('../util/getCounter')
const counter = getCounter()

module.exports.blur = function blur(stdDeviation = 5, attr) {
	return createAppend('feGaussianBlur', {
        stdDeviation,
        result: `blurred-${counter('result')}`,
        ...attr
    })
}

},{"../util/createAppend":19,"../util/getCounter":21}],3:[function(require,module,exports){
const { createAppend } = require('../util/createAppend')
const { getCounter } = require('../util/getCounter')
const counter = getCounter()

module.exports.colorMatrix = function colorMatrix(values, attr) {
    return createAppend('feColorMatrix', {
        result: `colored-${counter()}`,
        values: values,
        ...attr
    })
}

},{"../util/createAppend":19,"../util/getCounter":21}],4:[function(require,module,exports){
const { createAppend } = require('../util/createAppend')
const { getCounter } = require('../util/getCounter')
const counter = getCounter()

module.exports.compositeOnSource = function compositeOnSource(toBeComposed, operator = 'in', attr = {}) {
    return (parent) => createAppend('feComposite', {
        in: 'SourceGraphic',
        in2: toBeComposed(parent).getAttribute('result'),
        operator: operator,
        result: `composite-${counter()}`,
        ...attr
    })(parent)
}

module.exports.compositeSourceOn = function compositeSourceOn(toBeComposed, operator = 'in', attr = {}) {
    return (parent) => createAppend('feComposite', {
        in2: 'SourceGraphic',
        in: toBeComposed(parent).getAttribute('result'),
        operator: operator,
        result: `composite-${counter()}`,
        ...attr
    })(parent)
}

},{"../util/createAppend":19,"../util/getCounter":21}],5:[function(require,module,exports){
const { createAppend } = require('../util/createAppend')
const { getCounter } = require('../util/getCounter')
const counter = getCounter()

module.exports.convolveMatrix = function convolveMatrix(values, attr) {
    return createAppend('feConvolveMatrix', {
        kernelMatrix: values,
        result: `convolved-${counter()}`,
        ...attr
    })
}

},{"../util/createAppend":19,"../util/getCounter":21}],6:[function(require,module,exports){
const { getNodeFromTag } = require('../util/getNodeFromTag')
const { getId } = require('../util/getId')
const { setAttributes } = require('../util/setAttributes')

module.exports.filter = (svg) => {
    return (...args) => {
    	const children = args.filter((arg) => typeof arg === 'function')
    	const attrs = args.filter((arg) => typeof arg === 'object').reduce((acc, arg) => ({ ...acc, ...arg }), {})
        const id = `filter-${getId()}`
        const filterNode = document.createElementNS('http://www.w3.org/2000/svg', 'filter')

        filterNode.setAttribute('id', id)
        setAttributes(filterNode, attrs)
        svg.appendChild(filterNode)
        children.forEach(child => child(filterNode))

        return `url(#${id})`
    }
}

},{"../util/getId":22,"../util/getNodeFromTag":23,"../util/setAttributes":25}],7:[function(require,module,exports){
const { createAppend } = require('../util/createAppend')
const { getCounter } = require('../util/getCounter')
const counter = getCounter()

module.exports.flood = function flood(color, opacity = 1, attr = {}) {
    return createAppend('feFlood', {
        'flood-color': color,
        'flood-opacity': opacity,
        result: `flooded-${counter()}`,
        ...attr
    })
}

},{"../util/createAppend":19,"../util/getCounter":21}],8:[function(require,module,exports){
const { createAppend } = require('../util/createAppend')
const { getCounter } = require('../util/getCounter')
const counter = getCounter()

module.exports.image = function image(href, attr) {
    return createAppend('feImage', {
        href,
        result: `image-${counter()}`,
        ...attr
    })
}

},{"../util/createAppend":19,"../util/getCounter":21}],9:[function(require,module,exports){
module.exports = {
	...require('./blend'),
	...require('./blur'),
	...require('./colorMatrix'),
	...require('./composite'),
	...require('./convolveMatrix'),
	...require('./filter'),
	...require('./flood'),
	...require('./image'),
	...require('./linearGradient'),
	...require('./merge'),
	...require('./morphology'),
	...require('./offset'),
	...require('./pattern'),
	...require('./radialGradient'),
	...require('./stop'),
	...require('./turbulence')
}

},{"./blend":1,"./blur":2,"./colorMatrix":3,"./composite":4,"./convolveMatrix":5,"./filter":6,"./flood":7,"./image":8,"./linearGradient":10,"./merge":11,"./morphology":12,"./offset":13,"./pattern":14,"./radialGradient":15,"./stop":16,"./turbulence":17}],10:[function(require,module,exports){
const { getNodeFromTag } = require('../util/getNodeFromTag')
const { getId } = require('../util/getId')
const { setAttributes } = require('../util/setAttributes')

module.exports.linearGradient = (svg) => {
    return (...args) => {
    	const children = args.filter((arg) => typeof arg === 'function')
    	const attrs = args.filter((arg) => typeof arg === 'object').reduce((acc, arg) => ({ ...acc, ...arg }), {})
        const id = `linear-gradient-${getId()}`
        const linearGradientNode = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient')

        linearGradientNode.setAttribute('id', id)
        setAttributes(linearGradientNode, attrs)
        svg.appendChild(linearGradientNode)
        children.forEach(stop => stop(linearGradientNode))

        return `url(#${id})`
    }
}
},{"../util/getId":22,"../util/getNodeFromTag":23,"../util/setAttributes":25}],11:[function(require,module,exports){
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

},{"../util/getCounter":21,"../util/setAttributes":25}],12:[function(require,module,exports){
const { createAppend } = require('../util/createAppend')
const { getCounter } = require('../util/getCounter')
const counter = getCounter()

module.exports.morphology = function morphology(radius = 0, attr = {}) {
    return createAppend('feMorphology', {
        radius: Math.abs(radius),
        operator: radius >= 0 ? 'dilate' : 'erode',
        result: `morphology-${counter('result')}`,
        ...attr
    })
}

},{"../util/createAppend":19,"../util/getCounter":21}],13:[function(require,module,exports){
const { createAppend } = require('../util/createAppend')
const { getCounter } = require('../util/getCounter')
const counter = getCounter()

module.exports.offset = function offset(dx = 0, dy = 0, attr = {}) {
    return createAppend('feOffset', {
        dx: dx,
        dy: dy,
        result: `offset-${counter('result')}`,
        ...attr
    })
}

},{"../util/createAppend":19,"../util/getCounter":21}],14:[function(require,module,exports){
const { getNodeFromTag } = require('../util/getNodeFromTag')
const { getId } = require('../util/getId')
const { setAttributes } = require('../util/setAttributes')

module.exports.pattern = (svg) => {
    return (...args) => {
    	const children = args.filter((arg) => typeof arg === 'function')
    	const attrs = args.filter((arg) => typeof arg === 'object').reduce((acc, arg) => ({ ...acc, ...arg }), {})
        const id = `patternNode-${getId()}`
        const patternNode = document.createElementNS('http://www.w3.org/2000/svg', 'pattern')

        patternNode.setAttribute('id', id)
        setAttributes(patternNode, attrs)
        svg.appendChild(patternNode)
        children.forEach(child => child(patternNode))

        return `url(#${id})`
    }
}

},{"../util/getId":22,"../util/getNodeFromTag":23,"../util/setAttributes":25}],15:[function(require,module,exports){
const { getNodeFromTag } = require('../util/getNodeFromTag')
const { getId } = require('../util/getId')
const { setAttributes } = require('../util/setAttributes')

module.exports.radialGradient = (svg) => {
    return (...args) => {
    	const children = args.filter((arg) => typeof arg === 'function')
    	const attrs = args.filter((arg) => typeof arg === 'object').reduce((acc, arg) => ({ ...acc, ...arg }), {})
        const id = `radial-gradient-${getId()}`
        const radialGradientNode = document.createElementNS('http://www.w3.org/2000/svg', 'radialGradient')

        radialGradientNode.setAttribute('id', id)
        setAttributes(radialGradientNode, attrs)
        svg.appendChild(radialGradientNode)
        children.forEach(stop => stop(radialGradientNode))

        return `url(#${id})`
    }
}

},{"../util/getId":22,"../util/getNodeFromTag":23,"../util/setAttributes":25}],16:[function(require,module,exports){
const { createAppend } = require('../util/createAppend')

module.exports.stop = function stop(offset, stopColor, stopOpacity = 1, attr = {}) {
    return createAppend('stop', {
        offset,
        'stop-color': stopColor,
        'stop-opacity': stopOpacity,
        ...attr
    })
}

},{"../util/createAppend":19}],17:[function(require,module,exports){
const { createAppend } = require('../util/createAppend')
const { getCounter } = require('../util/getCounter')
const counter = getCounter()

module.exports.turbulence = function turbulence(attr) {
    return createAppend('feTurbulence', {
        result: `turbulence-${counter()}`,
        ...attr
    })
}

},{"../util/createAppend":19,"../util/getCounter":21}],18:[function(require,module,exports){
module.exports = {
	...require('./filters'),
	...require('./util')
}

if (typeof window !== 'undefined') {
	svgFilters = module.exports
}
},{"./filters":9,"./util":24}],19:[function(require,module,exports){
module.exports.createAppend = (tagName, attrs) => (parent) => {
	const node = document.createElementNS('http://www.w3.org/2000/svg', tagName)

	for (let name in attrs) {
		node.setAttribute(name, attrs[name])
	}

	parent.appendChild(node)

	return node
}
},{}],20:[function(require,module,exports){
module.exports.createElement = (tagName, attrs) => {
	const node = document.createElementNS('http://www.w3.org/2000/svg', tagName)

	for (let name in attrs) {
		node.setAttribute(name, attrs[name])
	}

	return node
}
},{}],21:[function(require,module,exports){
module.exports.getCounter = (initial = 0) => (value => () => value++)(initial)

},{}],22:[function(require,module,exports){
module.exports.getId = () => Math.random().toString(36).substr(2, 9)
},{}],23:[function(require,module,exports){
module.exports.getNodeFromTag = (parent = document.getElementsByTagName('body')[0]) => (tagName) => {
	let node = parent.getElementsByTagName(tagName)[0]
	if (!node) {
		node = document.createElementNS('http://www.w3.org/2000/svg', tagName)
		parent.appendChild(node)
	}
	return node
}
},{}],24:[function(require,module,exports){
module.exports = {
	...require('./getCounter'),
	...require('./getId'),
	...require('./getNodeFromTag'),
	...require('./setAttributes'),
	...require('./createElement'),
	...require('./createAppend')
}

},{"./createAppend":19,"./createElement":20,"./getCounter":21,"./getId":22,"./getNodeFromTag":23,"./setAttributes":25}],25:[function(require,module,exports){
module.exports.setAttributes = (node, attrs) => {
	for (let name in attrs) {
		node.setAttribute(name, attrs[name])
	}

	return node
}
},{}]},{},[18]);
