var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send(`Hello from Bad Wind/Tide Forecaster!`);
});

app.get('/tide/:site', function (req, res) {
	let site = req.params.site;
	let tide = Math.random()*5;
	res.send(`<h3>Bad Tide Forecast</h3>
		<p>The tide at <em>${site}</em> will be: </p>
		<p>${tide.toFixed(1)} feet</p>`);
});
	
app.get('/wind/:site/datetime/:datetime', function (req, res) {
	let site = req.params.site;
	let datetime = req.params.datetime;
	let wind = Math.random()*20;
	res.send(`<h3>Bad Wind Forecast</h3>
		<p>The wind at <em>${site}</em> at/on 
		${datetime} will be: </p>
		<p>${wind.toFixed(1)} miles per hour</p>`);
});

host = '127.0.0.1';
port = '5555';

app.listen(port, host, function () {
    console.log(`parameterRoute.js app listening on IPv4: ${host}:${port}`);
});
