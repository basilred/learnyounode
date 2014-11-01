var net = require('net');

var server = net.createServer(function (socket) {
	socket.end(function () {
		var date = new Date();
		var datestr = date.getFullYear() +
			"-" +
			date.getMonth() +
			"-" +
			date.getDate();
		console.log(datestr);
		// return datestr;
	});
});

// Use the port number supplied as the first command-line argument.
server.listen(process.argv[2]);