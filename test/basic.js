var should         = require('should')
  , JsonMaskStream = require('../index.js')
;


describe('create()', function() {
    describe('no arguments', function() {
        it('exists', function() {
			var jsonMaskStream = new JsonMaskStream({ dataPath: 'first,second' });
            should.exist(jsonMaskStream);
        });
    });
});
