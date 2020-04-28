const express = require('express');
const app = express();
var fs = require('fs');
var path = require('path');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const DataStore = require('nedb');
const users = require('./clubUsersHash.json');
const activities = require('./activities.json');
actdb = new DataStore({filename: __dirname + '/actDB', autoload: true});
usersdb = new DataStore({filename: __dirname + '/userDB', autoload: true});

actdb.find({}, function(err, docs) {
    if (err) {
        console.log("something is wrong");
    } else {
        console.log("We found " + docs.length + " activities");
        console.log(docs);
    }
});

usersdb.insert(users, function(err, newDocs) {
    if(err) {
        console.log("Something went wrong when writing");
        console.log(err);
    } else {
        console.log("Added " + newDocs.length + " Users");
    }
});

// cookies
const cookieName = "vd8386"; // Session ID cookie name, use this to delete cookies too.
app.use(session({
	secret: 'TienHuiFeng vd8386',
	resave: false,
	saveUninitialized: false,
    name: cookieName
}));

// Set Default Guest
app.use(function (req, res, next) {
    console.log(`session object: ${JSON.stringify(req.session.user)}`);
    console.log(`session id: ${req.session.id}`);
    if (!req.session.user) {
        req.session.user = {role: "guest"};
    }
    next();
});

// Check Role if Admin
function checkAdminMiddleware(req, res, next) {
	if (req.session.user.role !== "admin") {
		res.status(401).json({error: "Not permitted"});;
	} else {
		next();
	}
};

// home page
app.get('/activities', function (req, res) {
    res.header("Content-Type",'application/json');
    res.json(activities);
    /*actdb.find().toArray(function(err, results) {
      if (err) {
          // do something error-y
      } else {
          res.send( results );
      }
    });*/
});

// Add activities
app.post('/activities', express.json({limit: 'ACT_SIZE_LIMIT'}), 
    function(req, res, next) {
        let activity = req.body;
        console.log(JSON.stringify(activity));
        activities.push(activity);
        actdb.insert(activity);
        res.json(activities); 
    },
    activityErrors
);

// Login Page
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
            //db.users.push(newUserInfo);
            res.json(newUserInfo);
        });
    } else{
        res.status(401).json({"error": true, "message": "User/password error" });
        } 
    });

// Logout function
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

// Delete Activities
app.delete('/activities/:index',checkAdminMiddleware, function (req, res){
    let index = req.params.index; 
    actdb.remove({_id: index },function (err, index) 
    {
        console.log("removed " + index);
        });
    actdb.find({}, function(err, docs) {
    if (err) {
        console.log("something is wrong");
    } else {
        console.log("We found " + docs.length + " activities");
        console.log(docs);
    }
});
});

// Users
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
    usersdb.insert(noPassHash); 
});
 
// ActivityErr
function activityErrors(err, req, res, next) {
    res.status(400).json({
        error: true,
        message: "bad activity"
        });
    console.log(JSON.stringify(err));
        return;
}

const port = '8386';
const host = '127.8.88.5';

app.listen(port, host, function () {
console.log(`Club Server listening on IPv4: ${host}:${port}`);
});
