var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send(info2Html(req));
});

// Simple extra route example
app.get('/wind', function(req, res) {
    res.send(info2Html(req));
});

host = '127.0.0.1';
port = '5555';

app.listen(port, host, function () {
    console.log(`requestInfo.js app listening on IPv4: ${host}:${port}`);
});


function info2Html(req) {
    let beginning = 
`<!DOCTYPE html>
<html lang="en">
    <head><meta charset="utf-8">
        <title>Info on Your Request</title>
    </head><body>`,
        end = `</body></html>`;
		
    let content = `<p>Method: ${req.method}, HTTP version: ${req.httpVersion}`;
    content += `<p>Client IP: ${req.ip}</p>`;
    content += `<p>Original URL: ${req.originalUrl}</p>`;
	content += `<p>Path: ${req.path}</p>`;
    content += `<p>Query: ${JSON.stringify(req.query)}</p>`;
    content += `<h3>Request Headers:</h3>`;
    for (let h in req.headers){
        content += `<p>${h}:  ${req.headers[h]}</p>`
    }
    return beginning + content + end;
}