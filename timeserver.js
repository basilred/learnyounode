var net = require('net');

// Adding a leading zero to text representation
function pad (number) {
	if (number < 10) {
		return '0' + number;
	}
	return number;
}

var server = net.createServer(function (socket) {
	var date = new Date();
	var datestr = date.getFullYear()+'-'+pad(date.getMonth()+1)+'-'+
		pad(date.getDate()) + ' ' +
		pad(date.getHours()) + ':' + pad(date.getMinutes());
	socket.end(datestr);
});

// Use the port number supplied as the first command-line argument.
server.listen(process.argv[2]);