describe( 'zLib', function() {
	var fix;
	it( 'should be available as a global object', function() {
		expect( z ).toBeDefined();
	});
	describe( 'Initialization', function() {
		it('Should force new', function() {
			var instance =  z('hello');
			var newInstance = new z('hello');
			expect( instance ).toEqual( newInstance );
		});
		it('Should call the selection engine if a string is passed as parameter', function() {
			var spy = sinon.spy( z.statics, 'selector');
			z('hello');
			expect( spy.called ).toBe( true );
		});
		it('Should throw if parameter is not passed', function() {
			expect(function() { z() }).toThrow( new Error( "Argument is of wrong type" ) );
		});
	});

	describe( 'config', function() {
		var instance;
		beforeEach( function() {
			instance = z('hello');
		});
		it('Should have defaults', function() {
			expect(instance.config.highlightClass).toBe('highlighted');
		});
		it('should have a set method to change the defaults', function() {
			z.config.set('highlightClass', 'justtesting')
			expect(instance.config.highlightClass).toBe('justtesting');
		});

	});

	describe( 'statics', function() {
		it( 'namespace should be defined', function() {
			expect( z.statics ).toBeDefined();
		});

		it( 'should have a domReady method', function() {
			expect( z.statics.domReady ).toBeDefined();
		});

        describe("queing", function() {
            beforeEach(function() {
                //
            });
            afterEach(function() {
                //
            });
            it("Should create a fixed length queue", function() {
                var queue = z.statics.queue(2, ['test', 'testing']);
                queue.push('sup');
                expect( queue.length ).toBe( 2 );
                expect( queue[1] ).toBe( 'sup' );
            });
        });

		describe( 'selector', function() {
			it( 'should getElementById if the parameter is a string that starts with #', function () {
				var spy = sinon.spy( document, 'getElementById');
				z.statics.selector('#string');
				expect( spy.called ).toBe( true );
				document.getElementById.restore();
			});
			it( 'should the first tag it finds if the string is not and ID (not starting with #)', function () {
				var spy = sinon.spy( document, 'getElementsByTagName');
				z.statics.selector('string');
				expect( spy.called ).toBe( true );
				document.getElementsByTagName.restore();
			});
			// it( 'should only return the first element of a node list when selecting tags', function () {
			// 	var body = z.statics.selector( 'body' );
			// 	expect( document.getElementByTagName( 'body' ) ).toBe( true );
			// 	document.getElementsByTagName.restore();
			// });
			describe( 'getSiblings', function() {
				it( 'should grab an element real siblings (no empty text nodes )', function () {
					fix = createFix('div');
					text = document.createTextNode('\n');
					text2 = document.createTextNode('  data \n');
					text3 = document.createTextNode('fdsafdas');
					fix.appendChild(text); fix.appendChild(text2);  fix.appendChild(text3);
					var fix2 = createFix('div', false, false, fix);
					expect(	z.statics.getSiblings(fix2).length ).toBe( 3 );
					removeFix( fix );
				});
			});

			describe( 'getOffset', function() {
				it( "should return the top and left value of the element", function() {
					fix = createFix('div');
					fix.style.top = "10px";fix.style.left = "20px"; fix.style.position = "absolute";
					expect( z.statics.getOffset(fix) ).toEqual({ top: 10, left: 20 });
					removeFix( fix );
				});
			});

			describe( 'walkTheDom', function() {
				it( 'walk until it hits the stop', function () {
					fix = createFix(), fix2 = createFix(), fix3 = createFix(), fix4 = createFix(),  fix5 = createFix(),  fix6 = createFix(false,'stopDiv',false, fix4);
					fix.appendChild(fix2);fix.appendChild(fix3);fix.appendChild(fix4), fix.appendChild(fix5);
					var spy = sinon.spy();
					z.fn.walkTheDom( fix, spy, fix6 );
					expect( spy.getCall(4) ).toBeDefined();
					expect( spy.getCall(5) ).toBeNull();
					removeFix( fix );
				});
			});
		});

		describe( 'addEvent', function() {
			it( 'should be defined', function() {
				expect( z.statics.addEvent ).toBeDefined();
			});
			it( 'should use addEventListener if available', function() {
				var stub = sinon.stub( document, 'addEventListener');
				z.statics.addEvent( document );
				expect( stub.called ).toBe( true );
				document.addEventListener.restore();
			});
			it( 'should successfully bind event to element', function() {
				var spy = sinon.spy();
				var event = new Event('click');
				z.statics.addEvent( document, 'click', spy);
				document.dispatchEvent( event );
				expect( spy.called ).toBe( true );
			});
		});

		describe( 'removeEvent', function() {
			it( 'should be defined', function() {
				expect( z.statics.removeEvent ).toBeDefined();
			});
			it( 'should use removeEventListener if available', function() {
				var stub = sinon.stub( document, 'removeEventListener');
				z.statics.removeEvent( document );
				expect( stub.called ).toBe( true );
				document.removeEventListener.restore();
			});
		});

        describe("trigger event", function() {
            it("should trigger event on element", function() {
                var spy = sinon.spy();
                z.statics.addEvent( document, 'click', spy );
                z.statics.triggerEvent( document, 'click' );
                expect( spy.called ).toBe( true );
                z.statics.removeEvent( document, 'click', spy );
            });
        });

        describe("getNodeFromPos", function() {
            it("should get a node from mouse coordinates", function() {
                var node = z.statics.getNodeFromPos(0, 0);
                expect( document.querySelector('html') ).toBe( node );
            });
        });
	});

	describe( 'API', function() {
		describe( 'on method', function() {
			it( 'should call static addEvent', function() {
				var spy = sinon.spy( document, 'addEventListener');
				z( document ).on( 'click' );
				expect( spy.calledWith('click') ).toBe( true );
				document.addEventListener.restore();
			});
		});

		describe( 'scrollTop method', function() {

			beforeEach( function() {
				fix = createFix('div', 'foo');
				fix.style.height = '10px';
				fix.style.overflow = 'hidden';
				var fix2 = createFix('div', 'fooChild', false, fix);
				fix2.style.height = "100px";
			});
			afterEach( function() {
				removeFix( fix );
			});
			it( 'should return current scroll position if no value is passed', function() {
				fix.scrollTop = 10;
				var value = z( fix ).scrollTop();
				expect( value ).toBe( 10 );
			});
			it( 'should set new scroll top value to element', function() {
				z( fix ).scrollTop( 20 );
				expect( fix.scrollTop ).toBe( 20 );
			});
		});

		describe( 'scrollLeft method', function() {
			var fix;
			beforeEach( function() {
				fix = createFix('div', 'foo');
				fix.style.width = '10px';
				fix.style.height = '10px';
				fix.style.overflow = 'hidden';
				var fix2 = createFix('div', 'fooChild', false, fix);
				fix2.style.width = "100px";
				fix2.style.height = "100px";
			});
			afterEach( function() {
				removeFix( fix );
			});
			it( 'should return current scroll position if no value is passed', function() {
				fix.scrollLeft = 10;
				var value = z( fix ).scrollLeft();
				expect( value ).toBe( 10 );
			});
			it( 'should set new scroll top value to element', function() {
				z( fix ).scrollLeft( 20 );
				expect( fix.scrollLeft ).toBe( 20 );
			});
		});

        describe("trigger event", function() {
            it("should trigger event on element", function() {
                var spy = sinon.spy();
                z.statics.addEvent( document, 'click', spy );
                z( document).trigger('click');
                expect( spy.called ).toBe( true );
                z.statics.removeEvent( document, 'click', spy );
            });
        });


		it( 'should have a offset method to alias for statics.getOffest', function() {
			fix = createFix('div');
			fix.style.top = "10px";fix.style.left = "20px"; fix.style.position = "absolute";
			expect( z(fix).offset() ).toEqual({ top: 10, left: 20 });
			removeFix( fix );
		});
	});

	describe( 'xPath', function() {
		it( 'should have it\'s own namespace', function () {
			expect( z.xPath ).toBeDefined();
		});

		describe( 'getPath method', function() {
			it( 'should throw if invalid argument are passed', function() {
				expect( function() { z.xPath.getPath() } ).toThrow( new Error( 'This is not a valid target' ) );
			});
			it( 'return BODY if the node argument is equal to document.body', function() {
				expect( z.xPath.getPath(document.body) ).toBe( 'BODY' );
			});
			it( 'return path to current node if it has an ID', function() {
				fix = createFix('div', 'foo');
				expect( z.xPath.getPath(fix) ).toBe( '*[@id=\\"foo\\"]' );
				removeFix( fix );
			});
			it( 'return correct xpath for the node', function() {
				fix = createFix('div');
				text = document.createTextNode('\n');
				text2 = document.createTextNode('  data \n');
				var fix2 = createFix('div', false, false, fix);
				text3 = document.createTextNode('fdsafdas');
				fix.appendChild(text); fix.appendChild(text2);  fix.appendChild(text3);
				expect( z.xPath.getPath(text3) ).toBe( 'BODY/DIV[3]/text()[2]' );
				expect( z.xPath.getPath(fix2) ).toBe( 'BODY/DIV[3]/DIV[1]' );
				removeFix( fix );
			});
		});
		describe( 'getNodeFromXPath method', function() {
			it( 'should get node from xPath', function() {
				fix = createFix('div');
				text = document.createTextNode('\n');
				text2 = document.createTextNode('  text3text \n');
				var fix2 = createFix('div', false, 'canYouSeeMe', fix);
				text3 = document.createTextNode('fdsafdas');
				fix.appendChild(text); fix.appendChild(text2);  fix.appendChild(text3);
				var xpath1 =  z.xPath.getPath(text3);
				var xpath2 =  z.xPath.getPath(fix2);
				expect( z.xPath.getNodeFromXPath(xpath1).nodeValue ).toBe( '  text3text \n' );
				expect( z.xPath.getNodeFromXPath(xpath2).className ).toContain( 'canYouSeeMe' );
				removeFix( fix );
			});
		});
	});
	describe( 'selectionRange', function() {
		it( 'should have it\'s own namespace', function () {
			expect( z.selectionRange ).toBeDefined();
		});

		it( 'should detect browser\'s implementation of selection', function () {
			expect( z.selectionRange.selectionType ).toBeDefined();
		});

		it( 'selectionMethod should return a selection object', function () {
			expect( z.selectionRange.selectionMethod() ).toBeDefined();
		});

		it( 'getRangeObj should should throw if no valid selection object is passed', function () {
			expect( function() { z.selectionRange.getRangeObj(); }).toThrow( new Error("The selection object passed to getRangeObj is not valid") );
		});

		it( 'getRangeObj should return a range object', function () {
			var selection =  z.selectionRange.selectionMethod();
			var stub = sinon.stub( selection, 'getRangeAt' ).returns( new Range() );
			var range = z.selectionRange.getRangeObj(selection);
			expect( stub.called ).toBe( true );
			expect(range.endOffset ).toBeDefined();
		});

		it( 'getSerializedRange should should throw if no valid Range object is passed', function () {
			expect( function() { z.selectionRange.getSerializedRange(); }).toThrow( new Error( "The Range object passed to getSerializedRange is not valid" ) );
		});

		it( 'getSerializedRange should return a properly formated JSON range object', function () {
			var range = new Range();
			sinon.stub(z.xPath, "getPath").returns('XPATH');
			var JSONRange = z.selectionRange.getSerializedRange( range );
			expect( JSONRange.end.offset ).toBeDefined();
			expect( JSONRange.end.elxPath ).toBe( 'XPATH' );
			expect( JSONRange.start.elxPath ).toBe( 'XPATH' );
			expect( JSONRange.start.offset ).toBeDefined();
			z.xPath.getPath.restore();
		});

		it( 'getSerializedRange properly set the start and end offsets on JSON range object', function () {
			var range = new Range(), fix = createFix(), fix2 = createFix();
			range.setStart(fix, 0); range.setEnd(fix2, 0);
			var JSONRange = z.selectionRange.getSerializedRange( range );
			expect( JSONRange.end.offset ).toBe( 0 );
			expect( JSONRange.start.offset ).toBe( 0);
		});

		it( 'getSerializedRange properly set the start and end el on JSON range object', function () {
			var range = new Range(), fix = createFix(), fix2 = createFix();
			range.setStart(fix, 0); range.setEnd(fix2, 0);
			var JSONRange = z.selectionRange.getSerializedRange( range );
			expect( JSONRange.end.offset ).toBe( 0 );
			expect( JSONRange.start.offset ).toBe( 0);
		});

		it( 'should be able to unserialize a range  ', function () {
			var range = new Range(), fix = createFix(), fix2 = createFix();
			range.setStart(fix, 0); range.setEnd(fix2, 0);
			var JSONRange = z.selectionRange.getSerializedRange( range );
			var newRange = z.selectionRange.unserializeRange( JSONRange );
			expect( range ).toEqual( newRange );
		});
		// it( 'unserializeRange should throw if document.createRange is not implemented', function() {
		// 	document.createRange = false;
		// 	expect( function() { z.selectionRange.unserializeRange(); }).toThrow( new Error( "This browser does not seem to support document.createRange" ) );
		// });

	});
});
