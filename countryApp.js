
var fs = require("fs");

fs.readFile('./countries.json','utf-8',function(err,data){
	if (err) {
		throw err;

	}


	data = JSON.parse(data)


	for (var i = 0; i < data.length; i++) {

		if (data[i].name == process.argv[2]) {
			console.log("Country:" + data[i].name + " "+ "Top Level Domain:" + data[i].topLevelDomain)
		}

	}
});
