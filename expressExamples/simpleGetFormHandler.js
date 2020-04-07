
/*
    Example showing `get` form handling, and static
	file serving.
*/
var express = require('express');
var app = express();
app.use(express.static('public')); // For static assets

// Respond to get request from form page.
app.get('/simple_form_handling', function(req, res) {
	let info = req.query;
    res.send(createHtmlMessage(info));
});

function createHtmlMessage(info) {
    let begining = 
`<!DOCTYPE html>
<html lang="en">
    <head><meta charset="utf-8">
        <title>Get Form Handler Example</title>
		<link rel="stylesheet" href="bottleMessage.css">
    </head><body><div class="message">`,
        end = `</div></body></html>`;
    let content = `<h3>Message for <em>${info.user_name}</em></h3>`;
    content += `<p>${info.user_message}</p>`;
    return begining + content + end;
}

host = '127.0.0.1';
port = '5555';
app.listen(port, host, function () {
    console.log("simpleGetFormHandler.js app listening on IPv4: " + host +
	":" + port);
});
