
/*
    Example of post form handling, markdown processing and static files.
*/
var express = require('express');
var app = express();
app.use(express.static('public')); // For static assets
var bodyParser = require('body-parser');
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var commonmark = require('commonmark');
var reader = new commonmark.Parser();
var writer = new commonmark.HtmlRenderer();

// Respond to post request from form page.
app.post('/simple_form_handling', urlencodedParser, function(req, res) {
    res.send(createHtmlMessage(req.body));
});

function createHtmlMessage(info) {
    let begining = 
`<!DOCTYPE html>
<html lang="en">
    <head><meta charset="utf-8">
        <title>Markdown Form Handler Example</title>
		<link rel="stylesheet" href="bottleMessage.css">
    </head><body><div class="message">`,
        end = `</div></body></html>`;
    let content = `<h3>Message for <em>${info.user_name}</em></h3>`;
    let parsed = reader.parse(info.user_message);
    let niceMessage = writer.render(parsed);
    content += `${niceMessage}`;
    return begining + content + end;
}

const host = '127.0.0.1';
const port = '5555';
app.listen(port, host, function () {
    console.log("simpleMardownHandler.js app listening on IPv4: " + host +
	":" + port);
});
