# Homework #9 Solution
**Student Name**:  Tien-Hui Feng
**NetID**: vd8386


## Question 1 Securing User Passwords

### (a) Hash user passwords

hashUsers.js
``` javascript
users.forEach(function(user){
    let passHash = bcrypt.hashSync(user.password, nRounds);
    user.password = passHash;
    hashedUsers.push(user);    
});

[
  {
    "firstName": "Melia",
    "lastName": "Barker",
    "email": "tirrivees1820@outlook.com",
    "password": "$2a$10$.wAqcJN1vIhoCw4vVoP6fuvhuWD8DP61Bup2CuXAb1.0KouLdqNzq",
    "role": "admin"
  },
  {
    "firstName": "Demetrice",
    "lastName": "Parker",
    "email": "chihuahua1899@gmail.com",
    "password": "$2a$10$q8SqNk6jYX6/omJnOVsbX.QnwXiz6wmOMiJKmlqFHrxxnzIX7lgWG",
    "role": "member"
  },
  {
    "firstName": "Ligia",
    "lastName": "Hudson",
    "email": "umbrate1989@yahoo.com",
    "password": "$2a$10$pjWFUoE.uMdL5Az1pFb1IuVs26ddfx0N2oPkpoEg0X9kUbDzifDVK",
    "role": "member"
```

### (b) bcrypt work
![13sec](images/1b.JPG)


## Question 2 Basic Login Interface and Test

### (a) Login interface and handler
```javascript 
app.post('/login', function(req, res){
    db.user.findOne({
        where: {
            email: req.body.email
        }
    }).then(function(usr){
        if(!usr){
            res.status(401).send({"error": true, "message": "User/Email error" });
        }else{
            bcrypt.compare(req.body.password, user.password, function (err, result){
            if(result == true){
                let passHash = bcrypt.hashSync(usr.password, nRounds);
                usr.password = passHash;
                users.push(usr);   
            } else{
                res.status(401).send({"error": true, "message": "User/password error" });
            }}) 
            }
    }
    )
});

```



### (b) Test Login Interface



## Question 3 Sessions/Login

### (a) Add express-session to your clubServer



### (b) Test Session Cookies


### (c) Update login POST route


### (d) Create a logout GET path 


### (e) Testing login, logout, and cookies




## Question 4 Protect Add Activity Interface

### (a) Create and Insert Protection Middleware 
Create middleware that checks for the “admin” role and if it doesn’t find it returns a “Forbidden” code and JSON error message. Add that middleware to the POST handler for adding tours. Show the code for that middleware here.


### (b) Testing Protected Interface




## Question 5. Protected Get Users Interface

### (a) Create /users Interface



### (b) Test Protected /users Interface

