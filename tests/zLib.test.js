describe( 'zLib', function() {
	it( 'should be available as a global object', function() {
		expect( window.z ).toBeDefined();
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
			expect( window.z.statics ).toBeDefined();
		});

		describe( 'addEvent', function() {
			it( 'should be defined', function() {
				expect( window.z.statics.addEvent ).toBeDefined();
			});
			it( 'should use addEventListener if available', function() {
				var stub = sinon.stub( document, 'addEventListener');
				window.z.statics.addEvent( document );
				expect( stub.called ).toBe( true );
			});
		});

		describe( 'removeEvent', function() {
			it( 'should be defined', function() {
				expect( window.z.statics.removeEvent ).toBeDefined();
			});
			it( 'should use removeEventListener if available', function() {
				var stub = sinon.stub( document, 'removeEventListener');
				window.z.statics.removeEvent( document );
				expect( stub.called ).toBe( true );
			});
		});
	});
});