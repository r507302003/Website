const fs = require('fs');
const bcrypt = require('bcryptjs');
const users = require('./clubUsers2.json');
let nRounds = 13; // salt 
let hashedUsers = []; 
let start = new Date();  //timing code
 console.log(`Starting password hashing with nRounds = ${nRounds}, ${start}`);


users.forEach(function(user){
    let passHash = bcrypt.hashSync(user.password, nRounds);
    user.password = passHash;
    hashedUsers.push(user);    
});


let elapsed = new Date() - start; // timing code
console.log(`Finished password hashing, ${elapsed/1000} seconds.`);
fs.writeFileSync("clubUsersHash.json", JSON.stringify(hashedUsers, null, 2));