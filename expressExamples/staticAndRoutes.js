/* global require */
/*
    Example serving static assets and multiple routes.

*/
var express = require('express');
var app = express();
app.use(express.static('public')); // For static assets

app.get('/', function (req, res) {
	let myObj = {sender: "Dr. B", to: "CS351",
	message: "Hello, code the Web!"};
    res.json(myObj);
});

// Simple extra route example
app.get('/wind', function(req, res) {
    res.send("I'm sorry Dr. B there is no wind right now");
});

host = '127.0.0.1';
port = '5556';

app.listen(port, host, function () {
    console.log(`staticAndRoutes.js app listening on IPv4: ${host}:${port}`);
});
