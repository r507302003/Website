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
	secret: 'TienHuiFeng vd8386',
	resave: false,
	saveUninitialized: false,
    name: cookieName
}));

app.use(function (req, res, next) {
    console.log(`session object: ${JSON.stringify(req.session.user)}`);
    console.log(`session id: ${req.session.id}`);
    if (!req.session.user) {
        req.session.user = {role: "guest"};
    }
    next();
});

function checkCustomerMiddleware(req, res, next) {
	if (req.session.user.role === "guest") {
		res.status(401).json({error: "Not permitted"});;
	} else {
		next();
	}
};

function checkAdminMiddleware(req, res, next) {
	if (req.session.user.role !== "admin") {
		res.status(401).json({error: "Not permitted"});;
	} else {
		next();
	}
};


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
    console.log(req.body);
    let email = req.body.email; 
    let password = req.body.password; 
    let auser = users.find(function (usr){
        return usr.email === email
    });
    if(!auser){
        res.status(401).json({error: true, message: "User/Email error" });
        return;
    }
    let verified = bcrypt.compareSync(password, auser.passHash);
    if(verified){
        let newUserInfo = Object.assign({}, auser);
        delete newUserInfo.passHash; 
        let oldInfo = req.session.user; 
        req.session.regenerate(function(err){
            if(err){
                console.log(err);
            }
            req.session.user = Object.assign(oldInfo, newUserInfo); 
            res.json(newUserInfo);
        });
    } else{
        res.status(401).json({"error": true, "message": "User/password error" });
        } 
    });

app.get('/logout', function (req, res) {
	let options = req.session.cookie;
	req.session.destroy(function (err) {
		if (err) {
			console.log(err);
		}
		res.clearCookie(cookieName, options); // the cookie name and options
		res.json({message: "Goodbye"});
	})
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


app.get('/users', checkAdminMiddleware, function(req, res){
    let noPassHash = users.map(function (user){
        return{
            "firstName": user.firstName, 
            "lastName": user.lastName,
            "email": user.email, 
            "role": user.role
        };
    })
    res.json(noPassHash);
});
 




const port = '8386';
const host = '127.8.88.5';

app.listen(port, host, function () {
console.log(`Club Server listening on IPv4: ${host}:${port}`);
});
