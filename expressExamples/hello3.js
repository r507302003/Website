var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send(`Hello CS351!
	This is from the hello3.js
	Application`);
});

host = '127.0.3.1';
port = '7575';

app.listen(port, host, function () {
    console.log(`Hello3.js app listening on IPv4: ${host}:${port}`);
});
