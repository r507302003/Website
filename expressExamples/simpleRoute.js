var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send(`Hello!`);
});

app.get('/cs351', function (req, res) {
	res.send('Web Development!');
});
	
app.get('/wind', function (req, res) {
    console.log("Someone tried to get the wind");
	res.send('Sorry Dr. B, no wind today');
});

host = '127.0.0.1';
port = '5555';

app.listen(port, host, function () {
    console.log(`simpleRoute.js app listening on IPv4: ${host}:${port}`);
});
