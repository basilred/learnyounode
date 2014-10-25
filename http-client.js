var http = require('http'),
	baseUrl = process.argv[2];

http.get(baseUrl, function (response) {
	var urlData = '';
	response.setEncoding('utf8');
	response.on('data', function (chunk) {
		urlData += chunk;
		console.log(chunk);
	});
});