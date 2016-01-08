module.exports = function( filename, data ) {
    var pom = document.createElement( 'a' );
    pom.setAttribute( "href", "data:text/plain;charset=utf-8," + encodeURIComponent( data ) );
    pom.setAttribute( "download", filename );

    if( document.createEvent ) {
        var event = document.createEvent( 'MouseEvents' );
        event.initEvent( 'click', true, true );
        pom.dispatchEvent( event );
    }
    else {
        pom.click();
    }
};
