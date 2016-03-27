## Lets Get [ 2D & 3D ] Printing in Javascript

## Synopsis
lgp.js is a javascript library that helps read & write popular 3D printing file formats (obj, stl). It also helps to write out images and svg paths for laser etching and cutting. Easy file reading and writing is powered by lgp.js' file reader and writer.  

## Code Examples
The example below shows how to write out an .obj and stl file:

```js
var lgp = require('lgp');

var verts = [[0,0,0],[1,0,0],[1,1,0],[0,1,0]];
var indis = [[0,1,2],[0,2,3]];

lgp.fileWriter( "filename.stl", lgp.stlSerializer( {
  positions: verts,
  cells: indis
} ) );

lgp.fileWriter( "filename.obj", lgp.objSerializer( {
  positions: verts,
  cells: indis
} ) );
```

The example below shows how to read in an .obj file:
```js
var lgp = require('lgp');
lgp.fileReader( 'models/cube.obj', function parseObj( text ) {  
  var results = lgp.objDeserializer( text, { flipYZ: false, scale: 1.0 } );
  var positions = results.positions;
  var cells = results.cells;
  // you can do whatever you want here
} );
```

The example below shows how to read in an .obj file:
```js
var lgp = require('lgp');
lgp.fileReader( 'models/cube.obj', function parseObj( text ) {  
  var results = lgp.objDeserializer( text, { flipYZ: false, scale: 1.0 } );
  var positions = results.positions;
  var cells = results.cells;
  // make your wildest dreams come true
} );
```
Loading an stl is done in exactly the same manner, except you would use lgp.stlDeserializer;

The example below shows how to write out an image from a HTML canvas element:
```js
var lgp = require('lgp');
lgp.imageWriter( 'filename.png', canvas.toDataURL('image/png') );
```

The example below shows how to write out a svg path:
```js
var lgp = require('lgp');
var path = [[0,0,0],[1,0,0],[1,1,0],[0,1,0]];
lgp.fileWriter( "filename.svg", lgp.svgSerializer( { polygon: path, strokeWidth: 0.1 } ) );
```

## Motivation
This library is part of a larger project / series of libraries that aspires to bring computational design and digital fabrication to the web. This library aspires to be the ultimate file reader & writer that enable higher level computational design, 3d printing, g-code generation, cnc milling tool path creation, laser cutting paths, robotic motion planning, and more.

## Build Requirements
node.js (4.4.0+) & npm

## Installation
You can add this library to your project by running:
```
npm install --save https://github.com/YCAMInterlab/lgp.js.git
```

or via npm:
```
npm install --save lgp
```

## Examples
See https://github.com/rezaali/webgl-sketches/tree/master/hull

## Contribution
Copyright 2015-2016 [Reza Ali](http://www.syedrezaali.com) co-developed by [YCAMInterLab](http://interlab.ycam.jp/en/) during the [Guest Research Project v.3](http://interlab.ycam.jp/en/projects/guestresearch/vol3)

## License
Apache-2.0
