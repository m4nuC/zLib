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
	});
});