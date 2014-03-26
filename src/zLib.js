(function( window, doc, undefined ) {

	/** PRIVATE STUFF **/
	var EMPTY_STR = /^\s*$/g;
    // Trio of functions taken from Peter Michaux's article:
    // http://peter.michaux.ca/articles/feature-detection-state-of-the-art-browser-scripting
    function isHostMethod( o, p ) {
        var t = typeof o[p];
        return t == "function" || (!!(t == "object" && o[p])) || t == "unknown";
    }

    function isHostObject( o, p ) {
        return !!(typeof o[p] == "object" && o[p]);
    }

    function isHostProperty( o, p ) {
        return typeof o[p] != "undefined";
    }

    var smoothScrollTo = (function () {
        var timer, start, factor;

        return function (target, duration) {
            var offset = window.pageYOffset,
            delta  = target - window.pageYOffset; // Y-offset difference
            duration = Math.abs(delta) * 0.15;              // default 1 sec animation
            start = Date.now();                       // get start time
            factor = 0;

            if( timer ) {
                clearInterval(timer); // stop any running animation
            }

            function step() {
                var y;
                factor = (Date.now() - start) / duration; // get interpolation factor
                if( factor >= 1 ) {
                    clearInterval(timer); // stop animation
                    factor = 1;           // clip to max 1.0
                }
                y = factor * delta + offset;
                window.scrollBy(0, y - window.pageYOffset);
            }

            timer = setInterval(step, 10);
            return timer; // return the interval timer, so you can clear it elsewhere
        };
    }());

    // Based on http://addyosmani.com/resources/essentialjsdesignpatterns/book/#observerpatternjavascript
    //
    function PSub( object ) {
        // Storage for topics that can be broadcast
        // or listened to
        var topics = {};

        // An topic identifier
        var subUid = -1;

        // Publish or broadcast events of interest
        // with a specific topic name and arguments
        // such as the data to pass along
        object.trigger = function( topic, args ) {

            if ( !topics[topic] ) {
                return false;
            }

            var subscribers = topics[topic],
                len = subscribers ? subscribers.length : 0;

            while (len--) {
                subscribers[len].func.call( subscribers[len].context, args );
            }

            return this;
        };

        // Subscribe to events of interest
        // with a specific topic name and a
        // callback function, to be executed
        // when the topic/event is observed
        object.listenTo = function( topic, func, context ) {

            // set the context to this by default
            context = context || this;

            if (!topics[topic]) {
                topics[topic] = [];
            }

            var token = ( ++subUid ).toString();
            topics[topic].push({
                token: token,
                func: func,
                context: context
            });
            return token;
        };

        // Unsubscribe from a specific
        // topic, based on a tokenized reference
        // to the subscription
        object.topListening= function( token ) {
            for ( var m in topics ) {
                if ( topics[m] ) {
                    for ( var i = 0, j = topics[m].length; i < j; i++ ) {
                        if ( topics[m][i].token === token ) {
                            topics[m].splice( i, 1 );
                            return token;
                        }
                    }
                }
            }
            return this;
        };
    }


    // Fixed length queue, http://www.bennadel.com/blog/2308-Creating-A-Fixed-Length-Queue-In-JavaScript-Using-Arrays.htm
    // Create a constructor for the fixed-length queue. This is
    // really more of a FACTORY than a construtor since an
    // entirely tangential object is returned.
    function FixedQueue( size, initialValues ){

        // If there are no initial arguments, default it to
        // an empty value so we can call the constructor in
        // a uniform way.
        initialValues = (initialValues || []);

        // Create the fixed queue array value.
        var queue = Array.apply( null, initialValues );

        // Store the fixed size in the queue.
        queue.fixedSize = size;

        // Add the class methods to the queue. Some of these have
        // to override the native Array methods in order to make
        // sure the queue lenght is maintained.
        queue.push = FixedQueue.push;
        queue.splice = FixedQueue.splice;
        queue.unshift = FixedQueue.unshift;

        // Trim any initial excess from the queue.
        FixedQueue.trimTail.call( queue );

        // Return the new queue.
        return( queue );

    }

    // I trim the queue down to the appropriate size, removing
    // items from the beginning of the internal array.
    FixedQueue.trimHead = function(){

        // Check to see if any trimming needs to be performed.
        if (this.length <= this.fixedSize){

            // No trimming, return out.
            return;

        }

        // Trim whatever is beyond the fixed size.
        Array.prototype.splice.call(
            this,
            0,
            (this.length - this.fixedSize)
        );

    };


    // I trim the queue down to the appropriate size, removing
    // items from the end of the internal array.
    FixedQueue.trimTail = function(){

        // Check to see if any trimming needs to be performed.
        if (this.length <= this.fixedSize){

            // No trimming, return out.
            return;

        }

        // Trim whatever is beyond the fixed size.
        Array.prototype.splice.call(
            this,
            this.fixedSize,
            (this.length - this.fixedSize)
        );

    };


    // I synthesize wrapper methods that call the native Array
    // methods followed by a trimming method.
    FixedQueue.wrapMethod = function( methodName, trimMethod ){

        // Create a wrapper that calls the given method.
        var wrapper = function(){

            // Get the native Array method.
            var method = Array.prototype[ methodName ];

            // Call the native method first.
            var result = method.apply( this, arguments );

            // Trim the queue now that it's been augmented.
            trimMethod.call( this );

            // Return the original value.
            return( result );

        };
        // Return the wrapper method.
        return( wrapper );
    };

    // Wrap the native methods.
    FixedQueue.push = FixedQueue.wrapMethod(
        "push",
        FixedQueue.trimHead
    );

    FixedQueue.splice = FixedQueue.wrapMethod(
        "splice",
        FixedQueue.trimTail
    );

    FixedQueue.unshift = FixedQueue.wrapMethod(
        "unshift",
        FixedQueue.trimTail
    );

	/** CONSTRUCTOR **/
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

	/** Configuration setter **/
	z.config = {
		set: function( attr, value ) {
			z.prototype.config[attr] = value;
		}
	};

	// Config Statics
	z.prototype.config = {
		highlightClass : "highlighted"
	};


	/** STATICS **/
	z.statics = z.fn = {

        hasProp: isHostProperty,

        hasMethod: isHostMethod,

        hasObj: isHostObject,

        getScrollTop: function() {
            var scrollTop;
            if( typeof(window.pageYOffset) == 'number' ) {
                // DOM compliant, IE9+
                scrollTop = window.pageYOffset;
            } else {
                // IE6-8 workaround
                if( document.body && document.body.scrollTop ) {
                    // IE quirks mode
                    scrollTop = document.body.scrollTop;
                } else if( document.documentElement && document.documentElement.scrollTop ) {
                    // IE6+ standards compliant mode
                    scrollTop = document.documentElement.scrollTop;
                }
            }
            return scrollTop;
        },

        getScrollLeft: function() {
            var scrollLeft;
            if( typeof(window.pageXOffset) == 'number' ) {
                // DOM compliant, IE9+
                scrollLeft = window.pageXOffset;
            }
            else {
                // IE6-8 workaround
                if( document.body && document.body.scrollLeft ) {
                    // IE quirks mode
                    scrollLeft = document.body.scrollLeft;
                }
                else if( document.documentElement && document.documentElement.scrollLeft ) {
                    // IE6+ standards compliant mode
                    scrollLeft = document.documentElement.scrollLeft;
                }
            }
            return scrollLeft;
        },

        getScrollPos: function() {
            return { top: z.statics.getScrollTop(), left: z.statics.getScrollLeft() }
        },

        getObjLength: function( obj ) {
            var key, count = 0;
            for( key in obj ) {
                if( obj.hasOwnProperty(key) ) {
                    count++;
                }
            }
            return count;
        },

		isEmptyTextNode: function ( node ) {
			return node.nodeType === 3 && node.nodeValue.match( EMPTY_STR );
		},

		isNotEmptyTextNode: function( node ) {
			return node.nodeType === 3 && ! node.nodeValue.match( EMPTY_STR );
		},

        throttle: function ( callback, delay, scope ) {
            delay = delay || 250;
            scope = scope || this;
            var last_exec = 0,
                timeout = null;
            return function () {
                var context = scope || this;
                var args = arguments,
                    elapsed = +new Date() - last_exec;

                if ( elapsed < delay ) {
                    // hold on to it
                    timeout && clearTimeout( timeout );
                    timeout = setTimeout(function () {
                        last_exec = +new Date;
                        callback.apply( context, args );
                    }, delay - elapsed );
                } else {
                    last_exec = +new Date;
                    callback.apply( context, args );
                }
            };
        },

		/*!
		* domready (c) Dustin Diaz 2012 - License MIT
		* (Edited to remove dynamic naming )
		* @todo make this lintable
		*/
		domReady: function (ready) {
			var fns = [],
				fn,
				f = false,
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
		}(),

        queue: function( maxSize, initalValues ) {
            initalValues = initalValues || [];
            return new FixedQueue (maxSize, initalValues );
        },

        pSuber: function( obj ) {
            return PSub( obj );
        },

		selector: function ( str ) {
			//str = z.statics.fulltrim( str );
			var firstChar = str.charAt( 0 ),
				idOrClass = str.slice( 1, str.length);
			if ( firstChar === "#" ) {
				return this.el = doc.getElementById( idOrClass );
			} else {
				return this.el = doc.getElementsByTagName( str )[0];
			}
		},

		addEvent: function() {
			if ( isHostMethod(window, "addEventListener") ) {
				return function( trg, evt, fn ) {
					trg.addEventListener( evt, fn, false );
				};
			} else if ( isHostMethod(window, "attachEvent") ) {
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
		}(),

        triggerEvent: function( obj, evt ){
                var event = new Event( evt , {
                    'view': window,
                    'bubbles': true,
                    'cancelable': true
                });
                obj.dispatchEvent( event );
        },

		getSiblings: function( trg ) {
			var parent = trg.parentNode || parent;
			var raw = parent.childNodes;
			var i = 0, lgth = raw.length, siblings = [];
			for ( ; i < lgth; i ++ ) {
				var node = raw[i];
				// making sure that empty space and line break text nodes are excluded
				if ( z.fn.isEmptyTextNode(node) ) continue;
				siblings.push( node );
			}
			return siblings;
		},

		trigger: function( trg, evtType ) {
			var event = new Event( evtType );
			trg.dispatchEvent( event );
		},

		/**
		 * Get Element Offset
		 * based on http://www.quirksmode.org/js/findpos.html
		 * @param  {[type]} trg [description]
		 * @return {[type]}     [description]
         *
		 */
		getOffset: function( trg ) {
			var curleft = 0;
			var curtop = 0;

			if (trg.offsetParent) {
				do {
					curleft += trg.offsetLeft;
					curtop += trg.offsetTop;
				} while (trg = trg.offsetParent);
			}
			return { top: curtop, left: curleft };
		},

		/**
		 * Get Node form a cursor position
		 * @param  {INT} x [description]
		 * @param {INT} y [description]
         * @return {IHTMLElement}
		 */
        getNodeFromPos: function( x, y ) {
            if ( isHostMethod(document, "elementFromPoint") ) {
                return document.elementFromPoint( x, y );
            } else {
				throw new Error( 'This browser is not supported' );
			}
        },

		/**
		 * Crockford's walk the DOM method modified so that a context is can be specified for the call bac
		 * @param  {[type]} node    [description]
		 * @param  {[type]} func    [description]
		 * @param  {[type]} context [description]
		 *
		 */
		walkTheDom: function walk( node, func, stopAt ) {
			func( node );
			walk.prototype.isStop = stopAt == node;
			node = node.firstChild;
			while ( node && ! walk.prototype.isStop ) {
				walk( node, func, stopAt );
				node = node.nextSibling;
			}
		}
	};


	/** PUBLIC API **/
	z.prototype.on = function( evt, fn ) {
		z.statics.addEvent( this.el, evt, fn );
		return this;
	};

	z.prototype.off = function( evt, fn ) {
		z.statics.removeEvent( this.el, evt, fn );
		return this;
	};

	z.prototype.trigger = function( evtType ) {
		z.statics.trigger( this.el, evtType );
		return this;
	};

	z.prototype.offset = function() {
		return z.statics.getOffset( this.el );
	};

    z.prototype.getNodeFromPos = function( xPos, yPos ) {
        return z.statics.getNodeFromPos( xPos, yPos);
    };

    z.prototype.trigger = function( evt ) {
        return z.statics.triggerEvent( this.el, evt);
    };

	/**
	 * [scrollTop description]
	 * @param  {[type]} top [description]
	 * @return {[type]}     [description]
	 * @todo  body.scrollTop is deprecated in strict mode. Please use 'documentElement.scrollTop' if in strict mode and 'body.scrollTop' only if in quirks mode.
	 */
	z.prototype.scrollTop = smoothScrollTo;

	z.prototype.scrollLeft = function( left ) {
		var hasScrollLeft = 'scrollLeft' in this.el;
		var startPos = hasScrollLeft ? this.el.scrollLeft : this.el.scrollX;
		if ( left === undefined ) return startPos;

		var fn = function() {
			return hasScrollLeft ?
				function( value ){ this.el.scrollLeft = value; } :
				function( value ){ this.el.scrollTo(value, 0); };
		}();
		fn.call( this, left );
		return this;
			// this.animateScroll( fn, startPos, top, 500);
	};

	/**
	 * xPath Utilities
	 */
	z.xPath = {
		getPath: function( node ) {
			var parent, siblings, xPath, i, lgth, ix = 0;

			if ( typeof node !== 'object' ) {
				throw new Error( 'This is not a valid target' );

			// @todo should make sure that the document only contain on of this ID before using it as base
			} else if ( node.hasOwnProperty('id') && node.id !== '' && typeof node.id !== 'undefined' ) {
				//return '*[@id=\\\"' + node.id + '\\\"]';
				return '*[@id="' + node.id + '"]';

			} else if (node === document.body ) {
				return node.nodeName;
			} else if ( node === document ) {
                return '';
            }


			siblings = z.statics.getSiblings( node );

			for ( i = 0, lgth = siblings.length; i < lgth; i++ ) {
				if ( siblings[i].nodeName === node.nodeName ) ix++;
				if ( siblings[i] === node ) {
					// If the node is text type we need to use the text function otherwise nodeName
					var path = node.nodeType === 3 ? 'text()' : node.nodeName;
					return this.getPath( node.parentNode ) + '/' + path + "[" + ix + "]" ;
				}
			}
		},

		getNodeFromXPath : function( path ) {
            if ( path.indexOf('HTML') > -1 ||  path === ""  ) {
            	return document.evaluate( "/" + path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            } else {
                return document.evaluate( "//" + path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            }
		}
	};

	/**
	 * Selection range
	 * @type {Object}
	 */

	// externalize these 2 function so that they are call with window as context
	function getSelection() {
		return window.getSelection();
	}

	function docSelection() {
		return doc.selection();
	}

	function docCreateRange() {
		if ( isHostMethod(doc, "createRange") ) {
			return doc.createRange();
		} else {
			throw new Error( "This browser does not seem to support document.createRange" );
		}
	}

	// externalize this function so that we can call() it later with z.selectionRange as context
	function selectionMethod() {
		if ( isHostMethod(window, "getSelection") ) {
			this.selectionType = 'win';
			return getSelection;
		} else if ( isHostObject(doc, "selection") ) {
			this.selectionType = 'doc';
			return docSelection;
		} else {
			throw new Error( "This browser does not seem to support user selection APIs" );
		}
	}


	function emptySelection() {
		if ( isHostMethod(window, "getSelection") ) {
			return window.getSelection().removeAllRanges()
		} else if ( isHostObject(doc, "selection") ) {
			return document.selection.empty();
		}
	}

	z.selectionRange = {
		// Used to store selection method type, values after init: win, doc
		selectionType: undefined,

		emptySelection: emptySelection,

		getRangeObj: function( selectionObj ) {
			var range;

			if ( ! selectionObj || ! isHostProperty(selectionObj, 'anchorNode') ) {
				throw new Error("The selection object passed to getRangeObj is not valid");
			}

			if ( this.selectionType === 'win' ) {
				range = selectionObj.getRangeAt( 0 );
			// Safari!
			} else {
				range = doc.createRange();
				range.setStart( selectionObj.anchorNode, selectionObj.anchorOffset );
				range.setEnd( selectionObj.focusNode, selectionObj.focusOffset );
			}
			return range;
		},

		getSerializedRange: function( range ) {
			var sNodeXPath, eNodeXPath, sOffset, eOffset;

			if ( ! range || ! isHostProperty(range, 'startContainer') ) {
				throw new Error( "The Range object passed to getSerializedRange is not valid" );
			}

			sNodeXPath = z.xPath.getPath( range.startContainer );
			sOffset    = range.startOffset;
			eNodeXPath = z.xPath.getPath( range.endContainer );
			eOffset    = range.endOffset;

			return {
				start : {
					elxPath : sNodeXPath,
					offset : sOffset
				},
				end : {
					elxPath : eNodeXPath,
					offset : eOffset
				}
			};
		},

		unserializeRange: function( serializedRange ) {
			var range = docCreateRange();
			var startNode = z.xPath.getNodeFromXPath( serializedRange.start.elxPath );
			var endNode = z.xPath.getNodeFromXPath( serializedRange.end.elxPath );
			range.setStart( startNode, serializedRange.start.offset );
			range.setEnd( endNode, serializedRange.end.offset );

			//console.log(range);
			return range;
		}
	};

	z.selectionRange.selectionMethod = selectionMethod.call( z.selectionRange );

	// Alias statics to fn
	z.fn = z.statics;

    // Right now only available via browserify
    if (typeof exports === 'object') {
        module.exports = z;
    } else {
        window.z = z;
    }

})( window, document );

