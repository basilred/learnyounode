function someFunction(arg1, arg2, callback) {
	var mynumber = Math.ceil(Math.random() * (arg1 - arg2) + arg2);
	callback(mynumber);
}

someFunction(5, 10, function(num) {
	console.log(num);
})
