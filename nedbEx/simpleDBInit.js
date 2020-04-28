// Setup a NeDB datastore for some blog posts.
// Put in some example entries.
// Remove the file blogDB before running this example
//
const DataStore = require('nedb');
const db = new DataStore({filename: __dirname + '/blogDB', autoload: true});
// In these examples we set the _id property

let blog1 = {_id: "0", title: "Python Snake or language",
			content: `This will become the blog content.
			but for right now it is a placeholder`
};
let blog2 = {_id: "1", title: "C++ Closer to the Metal",
			content: `So powerful, but so error prone.
			Difficult to master.`
};
let blog3 = {_id: "2", title: "JavaScript Browsers Friend",
			content: `So powerful, no type checking.
			Keeps getting better.`
};
db.insert([blog1, blog2, blog3], function(err, newDocs) {
	if(err) {
		console.log("Something went wrong when writing");
		console.log(err);
	} else {
		console.log("Added " + newDocs.length + " docs");
	}
});




