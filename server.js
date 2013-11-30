var express = require('express');
var server = express()
var PORT = Number(process.env.PORT || 3000);

var DATA = [];

server.configure(function() {
  server.use(express.static(__dirname));
  server.use(express.bodyParser());
});

server.get('/data', function(req, res) {
  res.send(DATA);
});

server.put('/data', function(req, res) {
  DATA = req.body.data;

  res.send({status: 'OK'});
});

server.listen(PORT);
console.log('Server listen on PORT=\033[36m%s\033[39m', PORT);
