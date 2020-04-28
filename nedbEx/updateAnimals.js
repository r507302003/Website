// Shows Updating
// 
// 
const DataStore = require('nedb');
const db = new DataStore({filename: __dirname + '/tassieDB', autoload: true});
// update Devil
db.update({"comName": /Devil/}, {$set: {"status": "Endangered"}}, function(err, doc) {
	if (err) {
		console.log("something is wrong");
	} else {
		console.log(`Updated Tas Devil`);
        console.log(doc);
	}
});
db.find({"comName": /Devil/}, function(err, doc){
    if (err) {
		console.log("something is wrong");
	} else {
		console.log(`Updated Tas Devil`);
        console.log(doc);
	}
})

db.update({"comName": /Devil/}, {$unset: {"status": "Endangered"}}, function(err, doc) {
	if (err) {
		console.log("something is wrong");
	} else {
		console.log(`Updated Tas Devil`);
        console.log(doc);
	}
});
db.find({"comName": /Devil/}, function(err, doc){
    if (err) {
		console.log("something is wrong");
	} else {
		console.log(`Updated Tas Devil`);
        console.log(doc);
	}
})




