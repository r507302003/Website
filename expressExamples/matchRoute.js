var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send(`Hello!`);
});

app.get('/cs351/*', function (req, res) {
	let path = req.path;
	res.send(`Web Development!
		Path = ${path}
	`);
});
	
app.get('/wind/*', function (req, res) {
	let path = req.path;
	res.send(`Sorry Dr. B, no wind today
	on path = ${path}`);
});

host = '127.0.0.1';
port = '5555';

app.listen(port, host, function () {
    console.log(`matchRoute.js app listening on IPv4: ${host}:${port}`);
});
