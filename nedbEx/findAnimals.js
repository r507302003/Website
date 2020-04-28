// Open an existing database and get all the documents
// Make sure you run simpleDBInit.js before you run this file.
// 
const DataStore = require('nedb');
const db = new DataStore({filename: __dirname + '/tassieDB', autoload: true});

db.find({}, function(err, docs) {
	if (err) {
		console.log("something is wrong");
	} else {
		console.log("We found " + docs.length + " Types of mammals");
		console.log(docs);
	}
});
// Get a list of all the types of Possums that live in the park:
// Using a JavaScript regular expression
db.find({"comName": /Possum/}, function(err, docs) {
	if (err) {
		console.log("something is wrong");
	} else {
		console.log("We found " + docs.length + " Types of Possums");
		console.log(docs);
	}
});
// Get a list off all types of Bandicoot
// FYI https://en.wikipedia.org/wiki/Eastern_barred_bandicoot
db.find({"comName": /Bandicoot/}, function(err, docs) {
	if (err) {
		console.log("something is wrong");
	} else {
		console.log("We found " + docs.length + " Types of Bandicoot");
		console.log(docs);
	}
});

// Kangaroos or Wallabys
// Use $or operator
db.find({$or: [{"comName": /Kangaroo/}, {"comName": /Wallaby/}]}, function(err, docs) {
	if (err) {
		console.log("something is wrong");
	} else {
		console.log("We found " + docs.length + " Kangaroo like thing");
		console.log(docs);
	}
});





