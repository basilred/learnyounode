var makels = require('./make_it_modular.js'),
	dir = process.argv[2],
	ext = process.argv[3];

makels(dir, ext, function (err, files) {
	if (err) return console.log("There was an error:", err);
	files.forEach(function (file) {
		console.log(file);
	});
})
