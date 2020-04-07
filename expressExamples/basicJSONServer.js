// Returning and Taking JSON
var express = require('express');
var app = express();

let windthings = [{name: "10m Kite", age: 4}, {name: "7.7 Sail", age: 3}];

app.get('/', function (req, res) {
    res.json(windthings);
});

app.post('/addThing', express.json(), function(req, res) {
    console.log(`path /addThing received: ${JSON.stringify(req.body)}`);
    windthings.push(req.body);
    res.json(windthings);
});

var host = '127.0.0.1';
var port = '5555';

app.listen(port, host, function () {
console.log(`Basic JSON app listening on IPv4: ${host}:${port}`);
});
