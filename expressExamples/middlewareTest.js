/*
    Code to illustrate how Express.js middleware works, both general via the
    app.use(fn), and app.use(path, fn) approach and when setting up path
    hierachical path handlers via specific via  express.Routers.

    You'll want to watch the log messages as you visit the links:
    /, /wind, /air/temp, /air/humid, /water/temp, /water/wave
 */

var express = require("express");
var app = express();

// This middleware will be applied to all requests
var genMiddleware = function(req, res, next) {
    console.log(`general middleware called for original URL: ${req.originalUrl}, path ${req.path}`);
    next();
};

app.use(genMiddleware);

app.use('/air', function(req, res, next) {
    console.log(`/air specific middleware, original URL: ${req.originalUrl}, path ${req.path}`);
    next();
});

app.use('/*/temp', function(req, res, next) {
    console.log(`/*/temp specific middleware, original URL: ${req.originalUrl}, path ${req.path}`);
    next();
});

app.get('/', function(req, res) {
    let message = "You are at the root path, the other paths are: \n";
    message += "/wind, /air/temp, /air/humid, /water/wave, /water/temp";
    res.send(message);
})

app.get('/wind', function(req, res) {
    res.send("You are on the wind path");
});

let router1 = express.Router(); // We will dedicate this to the /air path hierarchy
let router2 = express.Router(); // We will dedicate this to the /water path hierarchy

// Router specific middleware
router1.use(function(req, res, next){
    console.log(`router1 middleware called for original URL: ${req.originalUrl}, ${req.path}`);
    next();
});

// Router specific middleware
router2.use(function(req, res, next){
    console.log(`router2 middleware called for original URL: ${req.originalUrl}, path ${req.path}`);
    next();
});

router1.get('/temp', function(req, res) {
    res.send("You are on the air/temp path");
});

router1.get('/humid', function(req, res) {
    res.send("You are at the humid path");
});

router2.get('/wave', function(req, res) {
    res.send("You are at the water/wave path");
});

router2.get('/temp', function(req, res) {  // Another /temp path but on a different router
    res.send("You are at the water/temp path");
});

app.use('/air', router1);  // Strips off "/air" before passing to router1
app.use('/water', router2); // Strips off "/water" before passing to router2

const host = '127.0.0.1';
const port = '2222';
app.listen(port, host, function () {
    console.log("middleWareTest.js app listening on IPv4: " + host +
	":" + port);
});