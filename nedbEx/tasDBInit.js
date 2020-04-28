// Create a NeDB datastore for mamals that live in Narawtapu
// national park in Tasmania, Australia.
//
// Remove the file tassieDB before running this example
//
const DataStore = require('nedb');
const db = new DataStore({filename: __dirname + '/tassieDB', autoload: true});

const mammals = require('./Narawntapu.json');
// We let NeDB create _id property for us.


db.insert(mammals, function(err, newDocs) {
	if(err) {
		console.log("Something went wrong when writing");
		console.log(err);
	} else {
		console.log("Added " + newDocs.length + " mammals");
	}
});




