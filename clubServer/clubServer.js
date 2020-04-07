const express = require('express');
const app = express();
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');
const data = fs.readFileSync('./activities.JSON');
const activities = JSON.parse(data);


app.get('/', function(req,res){
    res.header("Content-Type",'application/json');
    res.sendFile(path.join(__dirname, 'activities.JSON'));  
})

app.use(bodyParser());

app.post('/activities', express.json(), function(req, res) {
    console.log(`path /activities received: ${JSON.stringify(req.body)}`);
    activities.push(req.body);
    res.json(activities);
});


const port = 8386;
const host = '127.8.88.5';

app.listen(port, () => console.log(`JSON File Display: ${host}:${port}`));

