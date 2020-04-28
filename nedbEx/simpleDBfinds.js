// Open an existing database and get all the documents
// Make sure you run simpleDBInit.js before you run this file.
// 
const DataStore = require('nedb');
const db = new DataStore({filename: __dirname + '/blogDB', autoload: true});
// Get all the documents in the database
db.find({}, function(err, docs) {
	if (err) {
		console.log("something is wrong");
	} else {
		console.log("We found " + docs.length + " documents");
		console.log(docs);
	}
});




