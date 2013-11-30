var PORT = Number(process.env.PORT || 3000);

var server = require('./server');

server.listen(PORT);
console.log('Server listen on PORT=\033[36m%s\033[39m', PORT);
