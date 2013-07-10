var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var content = fs.readFileSync('index.html','utf-8');
  console.log(content);

  	var buff = new Buffer(256);
	len = buff.write(content, 0);
	response.send(buff.toString('utf8', 0, len));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});