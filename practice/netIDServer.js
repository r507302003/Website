const express = require('express');
const app = express();
const port = 8888;
host = '127.8.88.5';
app.get('/netID', function (req, res) {
    res.send(`<p>Name: Tien-Hui Feng  NetID: vd8386 </p> `);
});
app.listen(port, () => console.log(`NetID app listening on IPV4: ${host}:${port}`));