var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send(`Hello CS351!
	This is from the hello2.js
	Application`);
});

host = '127.0.0.2';
port = '5555';

app.listen(port, host, function () {
console.log(`Hello2.js app listening on IPv4: ${host}:${port}`);
});
