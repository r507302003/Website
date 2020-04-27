// Testing a JSON post interface
const rp = require('request-promise-native');
const cookieJar = rp.jar();

let baseURL = 'http://s127.8.88.5:8386';

let loginAdmin = {
    uri: baseURL + '/login',
    json: true,
    method: "POST",
    body: {
        "email": "tirrivees1820@outlook.com",
        "password": "49OqspUq"},
    jar: cookieJar
};

let loginMember = {
    uri: baseURL + '/login',
    json: true,
    method: "POST",
    body: {
        "email": "umbrate1989@yahoo.com",
        "password": "n3pLS4|=" },
    jar: cookieJar
};

let activities = {
    uri: baseURL + '/activities',
    json: true,
    method: "GET",
    jar: cookieJar
};

let addActivity = {
    uri: baseURL + '/activities',
    method: "POST",
    json: true,
    body: { 
        name: "NEW ACT",
        dates: "TODAY!" },
    jar: cookieJar
};

let logout = {
    uri: baseURL + '/logout',
    json: true,
    method: "GET",
    jar: cookieJar
}

function allCookies() {
    return cookieJar.getCookieString(baseURL);
}


async function someTests() {
    let res;
    console.log('Add Activity Test 1: Admin Login');
    try {
        res = await rp(loginAdmin);
        console.log(`Admin login, Cookies: ${allCookies()}`);
        res = await rp(activities);
        console.log(`Number of activities: ${res.length}\n`);
        res = await rp(addActivity);
        console.log(`After add number of activities: ${res.length}\n`);
        res = await rp(logout);
        console.log(`After logout, Cookies: ${allCookies()}\n`);
    } catch (error) {
        console.log(`Admin login error: ${error}\n`);
    }
    console.log("Add Test 2: Member Login");
    try {
        res = await rp(loginMember);
        console.log(`Member login, Cookies: ${allCookies()}`);
        res = await rp(activities);
        console.log(`Number of activities: ${res.length}\n`);
        res = await rp(addActivity);
        console.log(`After add number of activities: ${res.length}\n`);
        res = await rp(logout);
        console.log(`After logout, Cookies: ${allCookies()}\n`);
    } catch (error) {
        console.log(`Member add activity error: ${error}`);
        res = await rp(activities);
        console.log(`Number of activities: ${res.length}\n`);
        res = await rp(logout);
        console.log(`After logout, Cookies: ${allCookies()}\n`);
    }
    console.log(`After Login test 2, Cookies: ${allCookies()}\n`);
    console.log("Add Activity Test 3: Guest");
    try {
        res = await rp(activities);
        console.log(`Number of activities: ${res.length}\n`);
        res = await rp(addActivity);
        console.log(`After add number of activities: ${res.length}\n`);
        res = await rp(loginBadPass);
    } catch (error) {
        console.log(`Bad password login error: ${error}\n`);
        }
    console.log(`After Activity test 3, Cookies: ${allCookies()}\n`);
}

someTests();