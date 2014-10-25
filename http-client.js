var http = require('http'),
	baseUrl = process.argv[2];

http.get(baseUrl, function (response) {
	var urlData = '';
	response.setEncoding('utf8');
	response.on('data', function (chunk) {
		urlData += chunk;
	});
	response.on('end', function () {
		console.log(urlData.length);
		console.log(urlData);
	});
});
