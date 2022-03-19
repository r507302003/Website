const express = require('express');
const app = express();
const port = 8386;
const date = new Date();
host = '127.12.20.5';
app.get('/date', function (req, res) {
    res.send(`<p>Date and Time: ${date} </p> `);
});
app.listen(port, () => console.log(`Date and Time app listening on IPV4: ${host}:${port}`));