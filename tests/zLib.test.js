describe( 'zLib', function() {
	it( 'should be available as a global object', function() {
		expect( window.z ).toBeDefined();
	});


	describe( 'statics', function() {
		it( 'namespace should be defined', function() {
			expect( window.z.statics ).toBeDefined();
		});

		describe( 'addEvent', function() {
			it( 'should be defined', function() {
				expect( window.z.statics.addEvent ).toBeDefined();
			});
		});
	});
});