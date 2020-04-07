var express = require('express');
var app = express();

app.get('/', function (req, res) {
    console.log("request HTTP version", req.httpVersion);
    console.log("request headers", req.headers);
    res.send('Hello Website Development!');
});

// Simple extra route example
app.get('/wind', function(req, res) {
    res.send("I'm sorry Dr. B there is no wind right now");
});

app.listen(3000, function () {
    console.log('Hello.js app listening on port 3000!');
});
