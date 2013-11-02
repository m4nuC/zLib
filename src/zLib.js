(function( window, doc, undefined ) {

	// Constructor
	var z = function ( node ) {
		if ( this === window ) { 
			return new z( node );
		}
		if (  typeof node === "string" ) {
			this.el = z.statics.selector( node );
		} else if ( typeof node === "object" && node.nodeType !== "undefined" ) {
			this.el = node;
		}  else {
			throw new Error( "Argument is of wrong type" );
		}
	};

	/*!
	* domready (c) Dustin Diaz 2012 - License MIT
	* (Edited to remove dynamic naming )
	* @todo make this lintable
	*/
	var domready = function (ready) {
		var fns = [],
			fn,
			f = false,
			doc = document,
			testEl = doc.documentElement,
			hack = testEl.doScroll,
			domContentLoaded = 'DOMContentLoaded',
			addEventListener = 'addEventListener',
			onreadystatechange = 'onreadystatechange',
			readyState = 'readyState',
			loadedRgx = hack ? /^loaded|^c/ : /^loaded|c/,
			loaded = loadedRgx.test(doc[readyState]);

		function flush(f) {
			loaded = 1;
			while (f = fns.shift()) f();
		}

		doc[addEventListener] && doc[addEventListener](domContentLoaded, fn = function () {
			doc.removeEventListener(domContentLoaded, fn, f);
			flush();
		}, f);

		hack && doc.attachEvent(onreadystatechange, fn = function () {
			if (/^c/.test(doc[readyState])) {
				doc.detachEvent(onreadystatechange, fn);
				flush();
			}
		});

		return (ready = hack ?
			function (fn) {
				self != top ?
				loaded ? fn() : fns.push(fn) :
				function () {
					try {
						testEl.doScroll('left');
					} catch (e) {
						return setTimeout(function() { ready(fn) }, 50);
					}
					fn();
				}();
			} :
			function (fn) {
			loaded ? fn() : fns.push(fn);
		});
	}();

	// Statics
	z.statics = {

		// Local reference to Dustin Diaz Domready ( code at the bottom )
		domReady: domready,

		selector: function ( str ) {
			//str = z.statics.fulltrim( str );
			var firstChar = str.charAt( 0 ),
				actualName = str.slice( 1, str.length);
			if ( firstChar === "#" ) {
				this.el = document.getElementById( actualName );
			} 		
		},

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


	z.prototype.on = function( evt, fn ) {
		z.statics.addEvent( this.el, evt, fn );
		return this;
	};

	z.prototype.off = function( evt, fn ) {
		z.statics.removeEvent( this.el, evt, fn );
		return this;
	};

/**
 * [scrollTop description]
 * @param  {[type]} top [description]
 * @return {[type]}     [description]
 * @todo  body.scrollTop is deprecated in strict mode. Please use 'documentElement.scrollTop' if in strict mode and 'body.scrollTop' only if in quirks mode. 
 */
	z.prototype.scrollTop = function( top ) {
		var hasScrollTop = 'scrollTop' in this.el;
		var startPos = hasScrollTop ? this.el.scrollTop : this.el.scrollY;
		if ( top === undefined ) return startPos;

		var fn = function() {
			return hasScrollTop ?
				function( value ){ this.el.scrollTop = value } :
				function( value ){ this.el.scrollTo( 0, value ) };
		}();
		fn.call( this, top );
		return this;
			// this.animateScroll( fn, startPos, top, 500);
	};

	z.prototype.scrollLeft = function( left ) {
		var hasScrollLeft = 'scrollLeft' in this.el;
		var startPos = hasScrollLeft ? this.el.scrollLeft : this.el.scrollX;
		if ( left === undefined ) return startPos;

		var fn = function() {
			return hasScrollLeft ?
				function( value ){ this.el.scrollLeft = value } :
				function( value ){ this.el.scrollTo( value, 0 ) };
		}();
		fn.call( this, left );
		return this;
			// this.animateScroll( fn, startPos, top, 500);
	};

	window.z = z;
})(window, document);