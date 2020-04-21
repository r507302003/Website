const express = require('express');
let app = express(); // Can't use const if exporting
const session = require('express-session');
const bcrypt = require('bcryptjs');

const cookieName = "TourSid"; // Session ID cookie name, use this to delete cookies too.
app.use(session({
	secret: 'website development CSUEB',
	resave: false,
	saveUninitialized: false,
	name: cookieName // Sets the name of the cookie used by the session middleware
}));

// Fake user and tour data
const users = require('./secUsers.json');
const tours = require('./tours.json');


// This initializes session state
function setUpSessionMiddleware(req, res, next) {
//	console.log(`\nsession object: ${JSON.stringify(req.session)}`);
//	console.log(`session id: ${req.session.id}`);
	if (!req.session.user) {
		req.session.user = {role: "guest"};
	};
	next();
};

app.use(setUpSessionMiddleware);

// Use this middleware to restrict paths to only logged in users
function checkCustomerMiddleware(req, res, next) {
	if (req.session.user.role === "guest") {
		res.status(401).json({error: "Not permitted"});;
	} else {
//		console.log(`\nSession info: ${JSON.stringify(req.session)} \n`);
		next();
	}
};

// User this middlewave to restrict paths only to admins
function checkAdminMiddleware(req, res, next) {
	if (req.session.user.role !== "admin") {
		res.status(401).json({error: "Not permitted"});;
	} else {
		next();
	}
};

// Available to all visitors
app.get('/tours', function (req, res) {
    res.json(tours.virtTours);
});

// Only available to admin, returns updated tour list.
app.post('/addTour', checkAdminMiddleware, express.json(), function (req, res) {
	let temp = req.body;
//	console.log(temp);
	// Note need to check input here to prevent injection attacks
	let event = {
		name: temp.name,
		date: temp.date,
	};
	tours.virtTours.push(event);
	res.json(tours.virtTours);
});

// Available to all visitors, returns user info if successful
app.post('/login', express.json(), function (req, res) {
//	console.log(req.body);
	let email = req.body.email;
	let password = req.body.password;
	// Find user
	let auser = users.find(function (user) {
		return user.email === email
	});
	if (!auser) {// Not found
		res.status(401).json({error: true, message: "User/Password error"});
		return;
	}
	let verified = bcrypt.compareSync(password, auser.passHash);
	if (verified) {
		// Upgrade in priveledge, should generate new session id
		// Save old session information if any, create a new session
		let oldInfo = req.session.user;
		req.session.regenerate(function (err) {
			if (err) {
				console.log(err);
			}
			let newUserInfo = Object.assign(oldInfo, auser);
			delete newUserInfo.passHash;
			req.session.user = newUserInfo;
			res.json(newUserInfo);
		});
	} else {
		res.status(401).json({error: true, message: "User/Password error"});
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

module.exports = app;

