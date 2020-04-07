/*
    Code to illustrate how Express.js middleware works, both general via the
    app.use(fn), and app.use(path, fn) approach.
	
	Watch the console where you run this file for results.
 */

const express = require("express");
const app = express();

// This middleware will be applied to all requests
const logMiddleware = function(req, res, next) {
    console.log(`log middleware called for original URL: ${req.originalUrl}, path: ${req.path}, IP: ${req.ip}`);
    next();
};

app.use(logMiddleware);

const windMiddleware = function(req, res, next) {
	console.log(`wind middleware called, path: ${req.path}`);
    next();
}

app.use('/wind', windMiddleware);

app.get('/', function(req, res) {
    let message = "You are at the root path, the other paths are: \n";
    message += "/wind, /water";
    res.send(message);
})

app.get('/wind', function(req, res) {
    res.send("You are on the wind path");
});

const whateverMiddle = function(req, res, next) {
	// Add some useless information to the request object
	req.temperature = 50 + 30*Math.random();
	next();
}

app.get('/water', whateverMiddle, function(req, res) {
    res.send(`You are on the water path, the temperature is ${req.temperature}`);
});


const host = '127.0.0.1';
const port = '2222';
app.listen(port, host, function () {
    console.log("middleWareTest.js app listening on IPv4: " + host +
	":" + port);
});