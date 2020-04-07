// Testing a JSON post interface
const request = require('request');

const postInfo = {
    url: 'http://127.8.88.5:8386/activities',
    method: "POST",
    json: true,
    body: {
        name: "new Act", 
        location: "room 214", 
        time: "2:00 - 3:00", 
        dates:"May 3"}
};

console.log("POST JSON test");
request(postInfo, function(error, res, body) {
    console.log(error);
    console.log(body);
});