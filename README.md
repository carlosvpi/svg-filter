# svg-filter

Utility functions to create svg filters on web pages

## Install

```bash
$ npm install svg-filter
```

And then, in your code, import:

```javascript
import { filter } from 'svg-filter'
```

## Bundle

```bash
$ npm run bundle
```

## Test

```bash
$ npm test
```

Add `--updateSnapshots` to update the snapshots.

Add file names to test only those.

## Filter containers

A filter container is a function that is passed SVG filters and an SVG, and takes care of appending all the elements in the DOM. There are four filter containers:

* filter
* pattern
* linearGradient
* radialGradient

All of them have the same type:

```<container>: SVGNode -> [Filter | Attributes] -> Attribute::String```

* `SVGNode` is a DOM node. It doesn't have to be an SVG; it can be a DEFS node too.
* `Filter` is defined in the next section.
* `Attributes` is a hash containing the desired attributes to be held by the container node in the DOM
* `Attribute::String` is a string that can be the value of a `fill` or a `stroke` attribute of a DOM node, i.e., is the value for that attribute that applies the filter container to the node.

## Filter

A filter is a function that takes a parent DOM node and appends an SVG filter on in.

```<filter>: SVGNode -> Parameters -> SVGNode```

* SVGNode corresponds to the DOM node of the element created by the `container` function.
* Parameters is a list of parameters that depends on the particular filter.
* The returned SVG node is the DOM node of the element created by this function, i.e., the actual filter node.

### blur

Applies the `feBlur` filter.

```blur (parent: SVGNode) (stdDeviation: Int, attr: Attributes): SVGNode```





```javascript

filter(svg)
```