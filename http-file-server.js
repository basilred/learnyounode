var http = require('http'),
	fs = require('fs'),
	listeningPort = process.argv[2],
	inputFile = process.argv[3];

var server = http.createServer(function (request, response) {
	var file = fs.createReadStream(inputFile);
	file.pipe(response);
});

console.log('Listening to on port ', listeningPort);
server.listen(listeningPort);
