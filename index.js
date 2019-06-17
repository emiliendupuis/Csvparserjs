
var CSVParser = function(csv)
{ 

var readline = require('readline');

var rl = readline.createInterface({
	input: process.stdin,
		output: process.stdout
	});


var questions = [
"Choose your delimiter ( Default : , )  ",
"Choose your enclosing character ( Default : \\r\\n )  "
];

var infos = [];


var actualIndex = 0;

function getQuestion() {
	return questions[actualIndex];

}

rl.question(getQuestion(), function (answer) {
	infos[actualIndex] = answer;
	actualIndex++;

	rl.setPrompt(getQuestion());
	rl.prompt();

	rl.question(getQuestion(), function (answer) {
		infos[actualIndex] = answer;
		actualIndex++;

		rl.setPrompt(getQuestion());
		rl.prompt();
		Parse(infos[0], infos[1]);
	})

});


	function Parse(delimiter, enclosing)
	{
		var FileReader = require('filereader');
		var fapi = require('file-api');
		var reader = new FileReader();
		var File = fapi.File;

		reader.onload = function(enclosing) // when the file is converted, we proceed the following function
		{
			var result = reader.result; // read the result (string)
			if(delimiter.length == 0) // default delimiter is , 
			{
				delimiter = ",";
			}
			rows = result.split("\r\n"); // create an array and put the result into
	    	return rows.map(function (row) // create multiple arrays for each row
	    	{
	    		console.log(row.split(delimiter));
	    	});
		}
		reader.readAsText(new File(csv));	// convert the csv file into string
	}
}

exports.CSVParser = CSVParser;