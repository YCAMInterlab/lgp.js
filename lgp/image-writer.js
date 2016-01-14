module.exports = function( filename, data ) {

  var pom = document.createElement( 'a' );
  pom.href  = data;
  pom.download = filename;

  if( document.createEvent ) {
      var event = document.createEvent( 'MouseEvents' );
      event.initEvent( 'click', true, true );
      pom.dispatchEvent( event );
  }
  else {
      pom.click();
  }
};
