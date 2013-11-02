(function( window, doc, undefined ) {

	// Constructor
	var z = function ( node ) {
		if ( this === window ) { 
			return new z( node );
		}
		if (  typeof node === "string" ) {
			//this.el = z.statics.selector( node );
		} else if ( typeof node === "object" && node.nodeType !== "undefined" ) {
			this.el = node;
		}  else {
			throw new Error( "Argument is of wrong type" );
		}
	};

	// Statics
	z.statics = {

		addEvent: function() {
			if ( window.addEventListener !== 'undefined' ) {
				return function( trg, evt, fn ) {
					trg.addEventListener( evt, fn, false );
				};
			} else if ( typeof window.attachEvent !== 'undefined' ) {
				return function( trg, evt, fn ) {
					trg.attachEvent( evt, function() {
						call( trg );
					}, false );
				};
			} else {
				throw new Error( 'This browser is not supported' );
			}
		}(),

		removeEvent: function() {
			if ( window.removeEventListener !== 'undefined' ) {
				return function( trg, evt, fn ) {
					trg.removeEventListener( evt, fn, false );
				};
			} else if ( typeof window.detachEvent !== 'undefined' ) {
				return function( trg, evt, fn ) {
					trg.detachEvent( evt, fn, true);
				};
			} else {
				throw new Error( 'This browser is not supported' );
			}
		}()

	};



	window.z = z;
})(window, document);