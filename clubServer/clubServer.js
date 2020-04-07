const express = require('express');
const app = express();
var path = require('path');

const activities = require('./activities.JSON');

app.get('/', function(req,res){
    res.header("Content-Type",'application/json');
    res.sendFile(path.join(__dirname, 'activities.JSON'));  
})



const port = 8386;
host = '127.8.88.5';

app.listen(port, () => console.log(`JSON File Display: ${host}:${port}`));

