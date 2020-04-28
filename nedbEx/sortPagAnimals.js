// Shows sorting, pagination (limiting), and projection
// 
// 
const DataStore = require('nedb');
const db = new DataStore({filename: __dirname + '/tassieDB', autoload: true});
// Sort by common name, limit to the first 5
db.find({}).sort({"comName": 1}).limit(5).exec(function(err, docs) {
	if (err) {
		console.log("something is wrong");
	} else {
		console.log("First 5 Sorted by Common name");
		console.log(docs);
	}
});

// The {"sciName": 1} argument to find restricts the fields
// that are returned
db.find({}, {"sciName": 1}).sort({"sciName": 1}).limit(5).exec(function(err, docs) {
	if (err) {
		console.log("something is wrong");
	} else {
		console.log("First 5 sorted by Scientific name");
		console.log(docs);
	}
});




