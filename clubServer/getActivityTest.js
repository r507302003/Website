const rp = require('request-promise-native');

var options = {
    url: 'http://127.8.88.5:8386/activities',
    json: true
};

rp(options).then(function (body) {
        body.forEach(function(activity, i){
            console.log(`Activity ${i+1} name ${activity.name}, date: ${activity.date}`);
        });
    }).catch(function (err) {
        console.log(`Error: ${err}`);
    })