const express = require('express');
const app = express();
let count = 0;

app.get('/', function (req, res) {
    count++;
    res.send(`<body><p>Hello CS351!</p>
	<p>This is from the helloCount.js Application.</p>
    <p>This page has been visited <strong>${count} times.</strong></p></body>`);
});

host = '127.0.0.2';
port = '5555';

app.listen(port, host, function () {
console.log(`HelloCount.js app listening on IPv4: ${host}:${port}`);
});
