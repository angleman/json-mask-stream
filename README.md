# json-mask-stream

Pass thru specific parts of a JSON object strings in a stream and **preserves the structure of the included elements**. 

<img src="https://raw.github.com/angleman/json-mask-stream/master/logo.jpg" align="right" width="354px" />

## Install

```bash
npm install json-mask-stream
```

## Usage

Sample ```logfile.json``` line:

```js
{"ip": "198.55.125.23", "timestamp":"2014-02-24 10:29:42", "url": "http:\/\/somedomain.com"}
```

```js
var fs             = require('fs');
var logstream      = fs.createReadStream('logfile.json');
var split          = new require('split')();
var JsonMaskStream = require('json-mask-stream');
var maskStream     = new JsonMaskStream('url,timestamp');

logstream
.pipe(split)
.pipe(maskStream)
.pipe(process.stdout) //  {"url": "http:\/\/somedomain.com", "timestamp":"2014-02-24 10:29:42"}
```

## License 

### MIT
