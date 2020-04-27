const rp = require("request-promise-native");
const cookieJar = rp.jar();

let goodLogin = {
    uri: "http://127.8.88.5:8386/login",
    json: true,
    method: "POST",
    body: { "email": "tirrivees1820@outlook.com",
           "password": "49OqspUq"},
    jar: cookieJar    
};

let emailErr = {
    uri: "http://127.8.88.5:8386/login",
    json: true,
    method: "POST",
    body: { "email": "sylvan206@live.com",
        	"password": "1wQX_lYt"},
    jar: cookieJar
};    
    
let pswdErr = {
    uri: "http://127.8.88.5:8386/login",
    json: true,
    method: "POST",
    body: { "email": "tirrivees1820@outlook.com",
           "password": "2wQX_lYt"},
    jar: cookieJar
};
let activities = {
    uri: 'http://127.8.88.5:8386/activities',
    json: true,
    method: "GET",
    jar: cookieJar
};

let logout = {
    uri: 'http://127.8.88.5:8386/logout',
    json: true,
    method: "GET",
    jar: cookieJar
};

function allCookies() {
    return cookieJar.getCookieString('http://127.8.88.5:8386/');
};

async function someTests() {
    let res;
    try {
        res = await rp(activities);
        console.log(`Called activities, Cookies: ${allCookies()}`);
    
        res = await rp(goodLogin);
        console.log(`Good login test result: ${JSON.stringify(res)}\n`);
        console.log(`After good login, Cookies: ${allCookies()}\n`);
        
        res = await rp(logout);
        console.log(`After logout, Cookies: ${allCookies()}\n`);
    } catch (error) {
        console.log(`Good login error: ${error}\n`);  }
        console.log("Login Test 2: Bad Email");
    try {
        res = await rp(activities);
        console.log(`Called activities, Cookies: ${allCookies()}`);
        res = await rp(emailErr);
        console.log(`Bad email login test result: ${JSON.stringify(res)}\n`);
    } catch (error) {
        console.log(`Bad email login error: ${error}`);  }
        console.log(`After Login test 2, Cookies: ${allCookies()}\n`);
        console.log("Login Test 3: Bad Password");
    try {
        res = await rp(pswdErr);
        console.log(`Bad password login test result: ${JSON.stringify(res)}\n`);
    } catch (error) {
        console.log(`Bad password login error: ${error}\n`);
        }
        console.log(`After Login test 3, Cookies: ${allCookies()}\n`);
    }

someTests();