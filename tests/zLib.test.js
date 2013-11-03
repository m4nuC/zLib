describe( 'zLib', function() {
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
			var fix;
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
});