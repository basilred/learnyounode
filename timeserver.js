var net = require('net');

var server = net.createServer(function (socket) {
	// body...
});

server.listen(process.argv[2]);