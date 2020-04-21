const rp = require("request-promise-native");

let initialGet={
    uri: "http://127.8.88.5:8386/activities",
    json: true,
    method: 'GET'
}
let goodLogin = {
    uri: "http://127.8.88.5:8386/login",
    json: true,
    method: "POST",
    body: { firstName: "Melia",
            lastName: "Barker",
            email: "tirrivees1820@outlook.com",
            password: "$2a$13$9FSQlmbk7YsK/UmzTIL64enuRkKmrHKRWzPk8MmXIa3WuaAp5sfJe",
            "role": "admin"} 
};

let emailErr = {
    uri: "http://127.8.88.5:8386/login",
    json: true,
    method: "POST",
    body: { firstName: "Melia",
            lastName: "Barker",
            email: "worng0@outlook.com",
            password: "$2a$13$9FSQlmbk7YsK/UmzTIL64enuRkKmrHKRWzPk8MmXIa3WuaAp5sfJe",
            "role": "admin"} 
};    
    
let pswdErr = {
    uri: "http://127.8.88.5:8386/login",
    json: true,
    method: "POST",
    body: { firstName: "Melia",
            lastName: "Barker",
            email: "tirrivees1820@outlook.com",
            password: "$2a$13$9FWzPk8MmXIa3WuaAp5sfJe",
            "role": "admin"} 
};    

function printUser(data) {
    console.log(`{ "firstName": ${data.firstname}, "lastName": ${data.lastName}, "email": ${data.email}, "password": ${data.password} }  `);
}    
    
rp(initialGet).then(function(data) {
    return rp(goodLogin);
})
.then(function(data) {
    console.log("Good Login test result: ");
    printUser(data);
    return rp(emailErr);
})
.catch(function(err) {
    console.log("Bad Email Login Error: ")
    printUser(data);
    return rp(pswdErr);
})
.then(function(data) {
    printUser(data);
    return rp(pswdErr);
})
.catch(function(err) {
    console.log("Bad Password Login Error: ")
})