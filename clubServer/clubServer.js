const express = require('express');
const app = express();
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');
const activities = require('./activities.json');



app.get('/activities', function (req, res) {
    res.json(activities);
});


function activityErrors(err, req, res, next) {
    res.status(400).json({
        error: true,
        message: "bad activity"
        });
    console.log(JSON.stringify(err));
        return;
}


app.post('/activities', express.json({limit:ACT_SIZE_LIMIT}), 
    function(req, res, next) {
        let activity = req.body;
        console.log(JSON.stringify(activity));
        activities.push(activity);
        res.json(activities);
    },
    activityErrors
        );

app.delete('/activities/:index', function (req, res){
    let index = req.params.index; 
    console.log(`Delete Activity ${index}`);
    if(index <0 || index >= activities.length){
        console.log(`Bad activity deletion index: ${index}`);
        res.status(400).json({error: true, message: "Bad index"});
        return;
    }
    activities.splice(index, 1);
    res.json(activities);
});

const port = '8386';
const host = '127.8.88.5';

app.listen(port, host, function () {
console.log(`Club Server listening on IPv4: ${host}:${port}`);
});


function activityErrors(err, req, res, next) {
    // prepare and send error response here, i.e.,
    res.json({ message: error.message });
    // set an error code and send JSON message
    console.log(JSON.stringify(err));
    return;
}