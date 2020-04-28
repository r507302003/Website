const DataStore = require('nedb');
db = new DataStore({filename: __dirname + '/actDB', autoload: true});

const activities = require('./activities.json');
// We let NeDB create _id property for us.

db.insert(activities, function(err, newDocs) {
    if(err) {
        console.log("Something went wrong when writing");
        console.log(err);
    } else {
        console.log("Added " + newDocs.length + " activities");
    }
});