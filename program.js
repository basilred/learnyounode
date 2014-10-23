// var total = 0;

// for (var i = 2; i < process.argv.length; i++) {
// 	total += Number(process.argv[i]);
// };

// console.log(total);

var fs = require("fs");

var file = fs.readFileSync(process.argv[2]).toString();

var linesCount = 0;
for (var i = 0; i < file.length; i++) {
	if (file[i] === '\n') linesCount++;
};

console.log(linesCount);
