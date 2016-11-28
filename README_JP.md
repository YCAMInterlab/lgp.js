## Lets Get [ 2D & 3D ] Printing in Javascript

## Synopsis
lgp.jsは、objやstlなど3Dモデル出力のための一般的なファイル形式の読み込みや書き出しのためのJavascriptライブラリです。レーザーエッチングや、切断のためのイメージ、SVGパッチの書き出しにも役立ちます。簡単なファイルの読み込みと書き出しのためにlgp.jsのファイルリーダー、ライターとしての機能も備えています。

## Code Examples
次の例は、objとstlファイルの書き出し方です:

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

次の例は、objファイルの読み込み方です:
```js
var lgp = require('lgp');
lgp.fileReader( 'models/cube.obj', function parseObj( text ) {  
  var results = lgp.objDeserializer( text, { flipYZ: false, scale: 1.0 } );
  var positions = results.positions;
  var cells = results.cells;
  // you can do whatever you want here
} );
```

次の例は、objファイルの読み込み方です:
```js
var lgp = require('lgp');
lgp.fileReader( 'models/cube.obj', function parseObj( text ) {  
  var results = lgp.objDeserializer( text, { flipYZ: false, scale: 1.0 } );
  var positions = results.positions;
  var cells = results.cells;
  // make your wildest dreams come true
} );
```
stlファイルを読み込む方法は、lgp.stl Deserializer を使用する事以外は、上記と同じです;

次の例は、HTMLキャンバスからのイメージの書き出し方です:
```js
var lgp = require('lgp');
lgp.imageWriter( 'filename.png', canvas.toDataURL('image/png') );
```

次の例は、SVGパッチの書き出し方です:
```js
var lgp = require('lgp');
var path = [[0,0,0],[1,0,0],[1,1,0],[0,1,0]];
lgp.fileWriter( "filename.svg", lgp.svgSerializer( { polygon: path, strokeWidth: 0.1 } ) );
```

## Motivation
このライブラリは、コンピュテーショナル デザイン、及びパラメトリック デザインをウェブに広めようとする、大きなライブラリのプロジェクト/シリーズの一部です。
高度なコンピューテーショナル デザインや3Dモデルの出力、Gコード生成、CNCフライス加工ツール用のパスや、レーザー切断用のパスの生成、ロボット運動計画などを可能にする、全ての複雑な形態機能を備えた数学的頭脳になることを目的としています。

## Build Requirements
node.js (4.4.0+) & npm

## Installation
このライブラリをプロジェクトに追加するためには、以下の操作を行って下さい:
```
npm install --save https://github.com/YCAMInterlab/lgp.js.git
```

もしく以下の方法でも追加できます:
```
npm install --save lgp
```

## Examples
See https://github.com/rezaali/webgl-sketches/tree/master/hull

## Contribution
Copyright 2015-2016 [Reza Ali](http://www.syedrezaali.com) co-developed by [YCAMInterLab](http://interlab.ycam.jp/en/) during the [Guest Research Project v.3](http://interlab.ycam.jp/en/projects/guestresearch/vol3)

## License
Apache-2.0
