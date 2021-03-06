const express = require('express');
const app = express(); 

app.get('/', function(req,res){
    res.send("You are at the root path, the other paths are: /date , /netID"); 
}); 

app.get('/date', function (req, res) {
    let dt = "Date and Time: " + date.toLocaleDateString() + " " + date.toLocaleTimeString();
    res.send(dt);
});

app.get('/netID', function (req, res) {
    res.send(`<p>Name: Tien-Hui Feng  NetID: vd8386 </p> `);
});


host = '127.50.50.88'; 
port = 2110; 
app.listen(port, () => console.log(`Combined app listening on IPV4: ${host}:${port}`));