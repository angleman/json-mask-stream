var should         = require('should')
  , JsonMaskStream = require('../index.js')
;


describe('create()', function() {
    describe('basic arguments', function() {
        it('exists', function() {
			var jsonMaskStream = new JsonMaskStream('first,second');
            should.exist(jsonMaskStream);
        });
    });
});
