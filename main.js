var test = require('./index.js');
var readline = require('readline');
var file = '';
var rl = readline.createInterface({
	input: process.stdin,
		output: process.stdout
	});


rl.question("Which file do you want to parse ? (Must be .csv file) ", function (answer) {
	file = answer;
	rl.close();
	console.log(test.CSVParser(file));
});