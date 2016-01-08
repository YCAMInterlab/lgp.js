var normalize = require('guf').normalizeArray;
var calculateNormals = require('guf').vertexNormals;

module.exports = function( input ) {
  if( input.constructor === Array ) {
    var output = "";
    for( var i = 0; i < input.length; i++ ) {
       output += serialize( input[0], i );
    }
    return output;
  }
  else {
    return serialize( input, 0 );
  }
};

function serialize( input, index ) {
  if( input.positions === undefined || input.cells === undefined ) {
    throw "Input Not Valid: Does not contain any positions or cells";
  }
  var name = input.name === undefined ? "model" + index : input.name;
  var cells = input.cells[0].constructor === Array ? normalize( input.cells ) : input.cells;
  var positions = input.positions[0].constructor === Array ? normalize( input.positions ) : input.positions;
  var normals = undefined;

  if( input.normals != undefined ) {
    normals = input.normals[0].constructor === Array ? normalize( input.normals ) : input.normals;
  }
  else {
    normals = calculateNormals( positions, cells );
  }
  //Write verts
  var obj = "g " + name + "\n";
  var verts = "";
  var norms = "";
  var faces = "";
  for( var i = 0; i < positions.length; i += 3 ) {
    verts += "v " + positions[ i ] + " " + positions[ i + 1 ] + " " +  positions[ i + 2 ] + "\n";
    norms += "vn " + normals[ i ] + " " + normals[ i + 1 ] + " " +  normals[ i + 2 ] + "\n";
  }

  for( var i = 0; i < cells.length; i += 3 ) {
    var i0 = cells[ i ] + 1;
    var i1 = cells[ i + 1 ] + 1;
    var i2 = cells[ i + 2 ] + 1;
    faces += "f " + i0 + "//" + i0 + " " + i1 + "//" + i1 + " " + i2 + "//" + i2 + "\n";
  }

  obj += verts;
  obj += norms;
  obj += faces;

  return obj
}
