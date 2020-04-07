const express = require('express');
var app = express();
const nunjucks = require('nunjucks');
nunjucks.configure('templates', {
    autoescape: true,
    express: app
});
let host = '127.0.3.1'; // Choose a different loopback address
let port = '7373'; // Last digits of your NetID
let myName = 'Dr. B';

let info = {host: host, port: port, name: myName}

app.get('/', function (req, res) {
    res.render('hello.html', info);
});

app.listen(port, host, function () {
    console.log(`templateEx.js app listening on IPv4: ${host}:${port}`);
});