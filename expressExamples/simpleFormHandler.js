/*
    Example of post form handling and static files.
*/
const express = require('express');
let app = express();
app.use(express.static('public')); // For static assets
let urlencodedParser = express.urlencoded({extended: true});

// Respond to post request from form page.
app.post('/simple_form_handling', urlencodedParser, function(req, res) {
    console.log(req.body);
    //res.send(req.body);
    res.send(createHtmlMessage(req.body));
});

function createHtmlMessage(info) {
    let begining = 
`<!DOCTYPE html>
<html lang="en">
    <head><meta charset="utf-8">
        <title>Put Form Handler Example</title>
		<link rel="stylesheet" href="bottleMessage.css">
    </head><body><div class="message">`,
        end = `</div></body></html>`;
    let content = `<h3>Message for <em>${info.user_name}</em></h3>`;
    content += `<p>${info.user_message}</p>`;
    return begining + content + end;
}

const host = '127.0.0.1';
const port = '5555';
app.listen(port, host, function () {
    console.log("simpleFormHandler.js app listening on IPv4: " + host +
	":" + port);
});
