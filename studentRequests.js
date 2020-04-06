const request = require('request');

function lookAtResponse(response) {
    console.log(`Status: ${response.statusMessage}`);
    console.log(`Status code: ${response.statusCode}`);
    console.log(`request: ${JSON.stringify(response.request)}`);
    console.log(`HTTP version: ${response.httpVersion}`);
    console.log(`headers: ${JSON.stringify(response.headers)}`);
    console.log(`trailers: ${JSON.stringify(response.trailers)}`);

}

function lookAtBody(body) {
    console.log('body size:', body.length);
}

request.get("http://127.0.0.2:8282/static/index.html",
    function(error, response, body){
    if (error) {
        console.log('error:', error);
        return;
    };
    lookAtResponse(response);
    lookAtBody(body);
    console.log("\n\n\n");
});