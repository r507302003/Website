const express = require('express');
const app = express();
var fs = require('fs');
var path = require('path');
const data = fs.readFileSync('./activities.JSON');
const activities = JSON.parse(data);
const bcrypt = require('bcryptjs');
const users = require('./clubUsersHash.json');
const session = require('express-session');

const cookieName = "vd8386"; // Session ID cookie name, use this to delete cookies too.
app.use(session({
	secret: session.user = {role: "guest"},
	resave: false,
	saveUninitialized: true,
	cookie: { secure: true },
    name: cookieName
}));

app.get('/activities', function (req, res) {
    res.header("Content-Type",'application/json');
    res.sendFile(path.join(__dirname, 'activities.JSON')); 
});


function activityErrors(err, req, res, next) {
    res.status(400).json({
        error: true,
        message: "bad activity"
        });
    console.log(JSON.stringify(err));
        return;
}


app.post('/login', express.json(), function(req, res){
    let email = req.body.email; 
    let password = req.body.password; 
    let auser = users.find(function (usr){
        return usr.email === email
    });
    if(!auser){
        res.status(401).send({error: true, message: "User/Email error" });
        return;
    }else{
        bcrypt.compareSync(password, auser.password, function (err, result){
        if(result == true){
            let newUserInfo = Object.assign(oldInfo, auser);
            delete newUserInfo.password; 
            req.session.user = newUserInfo; 
            res.json(newUserInfo);
        } else{
            res.status(401).send({"error": true, "message": "User/password error" });
        }}) 
        }
    });



app.post('/activities', express.json({limit: 'ACT_SIZE_LIMIT'}), 
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
