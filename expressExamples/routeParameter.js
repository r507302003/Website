
/*
    Example supporting route parameters and static files.
    See http://expressjs.com/en/guide/routing.html
*/
var express = require('express');
var app = express();
app.use(express.static('public')); // For static assets

app.get('/', function (req, res) {
    console.log("request HTTP version", req.httpVersion);
    console.log("request headers", req.headers);
    res.send('Hello Greg!');
});

// Route example that supports parameters
app.get('/wind/:location', function(req, res) {
    console.log("parameters", req.params);
    var resString = "I'm sorry Dr. B there is no wind at ";
    resString += req.params.location + " right now.";
    res.send(resString);
});

app.listen(3000, function () {
    console.log('Example app3 listening on port 3000!');
});
