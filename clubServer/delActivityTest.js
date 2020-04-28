// Testing a JSON post interface
const rp = require('request-promise-native');
const cookieJar = rp.jar();

let baseURL = 'http://127.8.88.5:8386';

let loginAdmin = {
    uri: baseURL + '/login',
    json: true,
    method: "POST",
    body: {
        "email": "tirrivees1820@outlook.com",
        "password": "49OqspUq"},
    jar: cookieJar
};

let delActivity = {
    uri: baseURL + "/activities/:index",
    json: true,
    method:"DELETE", 
    jar: cookieJar
};

let activities = {
    uri: baseURL + '/activities',
    json: true,
    method: "GET",
    jar: cookieJar
};

function allCookies() {
    return cookieJar.getCookieString(baseURL);
}


async function someTests() {
    let res;
    console.log('Delete Activity Test');
    try {
        res = await rp(loginAdmin);
        console.log(`Admin login`);
        res = await rp(activities);
        console.log(`Number of activities: ${res.length}\n`);
        res = await rp(delActivity);
        console.log(`After delete number of activities: ${res.length}\n`);
    } catch (error) {
        console.log(`Admin login error: ${error}\n`);
    }
    try{
        res = await rp(delActivity);
        console.log(`After another delete number of activities: ${res.length}\n`);
    } catch(err){
        console.log(`Admin login error: ${error}\n`);
    }
}
someTests();