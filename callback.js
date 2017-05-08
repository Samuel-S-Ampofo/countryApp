

var read = require("./jason-file-reader")


function  magic(data){

	for (var i = 0; i < data.length; i++) {

		if (data[i].name == process.argv[2]) {
			console.log("Country:" + data[i].name + " "+ "Top Level Domain:" + data[i].topLevelDomain);
		}

   }		
}



read.jasonReader(countries.json,magic);