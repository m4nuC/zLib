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


	describe( 'statics', function() {
		it( 'namespace should be defined', function() {
			expect( z.statics ).toBeDefined();
		});

		it( 'should have a domReady method', function() {
			expect( z.statics.domReady ).toBeDefined();
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
					expect( z.statics. getSiblings(fix2).length ).toBe( 3 );
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
				expect( z.xPath.getPath(fix) ).toBe( '*[@id="foo"]' );
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

});