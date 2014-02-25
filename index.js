var util   = require('util')
, stream   = require('stream').Transform || require('readable-stream').Transform // stream 2 compatible
, jsonMask = require('json-mask');
; 

 
// json string in and out
function JsonMaskStream(mask) {
	var self = this;
 
	self.mask = mask;
  
	stream.call(self, { objectMode: true });
 
	self._transform = function (data, encoding, callback) {
		if (data) {
			var json   = data.toString('utf8');
			var parsed = JSON.parse(json);
			var masked = jsonMask(parsed, self.mask);
			json = JSON.stringify(masked);
			data = new Buffer(json, 'utf8');
		}
		self.push(data);
		callback();
	};
}

 
util.inherits(JsonMaskStream, stream);
 
module.exports = JsonMaskStream;