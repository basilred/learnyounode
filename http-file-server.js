var http = require('http'),
	listeningPort = process.argv[2];
var server = http.createServer(function (request, response) {
	// body...
});
console.log('Listen to on port ', listeningPort);
server.listen(listeningPort);
