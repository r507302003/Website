var rp = require('request-promise');


var options = {
    url: 'http://127.8.88.5:8386/',
    qs: {
        access_token: 'xxxxx xxxxx' // -> uri + '?access_token=xxxxx%20xxxxx'
    },
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
};

rp(options)
    .then(function (body) {
        console.log(body); 
    })
    .catch(function (err) {
        // API call failed...
    });