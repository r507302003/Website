const express = require('express');
const app = express();
const session = require('express-session');

// cookies
const cookieName = "vd8386"; // Session ID cookie name, use this to delete cookies too.
app.use(session({
	secret: 'TienHuiFeng vd8386',
	resave: false,
	saveUninitialized: false,
    name: cookieName
}));


app.use(express.static('public')); // For static assets
const questions = {
    "firstName": "Melia",
    "lastName": "Barker",
    "email": "tirrivees1820@outlook.com",
    "password": "49OqspUq",
    "role": "admin"
  }; 


app.get('/logInfo', function (req, res) {
	res.json({questions: questions});
	}
)

app.post('/logInfo', express.json(), function(req, res){
		questions.push(req.body.q);
        res.json(req.body.q);
})

// Logout function
app.get('/logout', function (req, res) {
	let options = req.session.cookie;
	req.session.destroy(function (err) {
		if (err) {
			console.log(err);
		}
		res.clearCookie('Max-age':0, path:'/'); // the cookie name and options
		res.json({message: "Goodbye"});
	})
});

const host = '127.0.0.2';
const port = '5555';
app.listen(port, host, function () {
    console.log("loginServer.js app listening on IPv4: " + host +
        ":" + port);
});
