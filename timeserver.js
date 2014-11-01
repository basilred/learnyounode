var net = require('net');

var server = net.createServer(function (socket) {
	var date = new Date().toISOString();
	socket.end(date);
});

// Use the port number supplied as the first command-line argument.
server.listen(process.argv[2]);