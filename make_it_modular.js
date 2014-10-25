var fs = require('fs');
var path = require('path');

module.exports = function (dirname, filenameExt, callbackFunc) {
	fs.readdir(dirname, function (err, files) {
		if (err) return callbackFunc(err);
		files = files.filter(function (file) {
			return path.extname(file) === '.' + filenameExt;
		});
		callbackFunc(null, files);
	});
}
