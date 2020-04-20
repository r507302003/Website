// Testing a JSON post interface
const rp = require('request-promise-native');
const verbose = false;


const initialGet={
    uri:'http://127.8.88.5:8386/activities', 
    json: true,
    method:'GET'
};

const firstPost = {
    uri: 'http://127.8.88.5:8386/activities',
    method: "POST",
    json: true,
    body: {
        name: "new Act", 
        location: "room 214", 
        time: "2:00 - 3:00", 
        dates:"May 3"}
};

function printActivities(data) {
    console.log(`Currently ${data.length} activities`);
    data.forEach(function(activity, i) {
    console.log(`Activity ${i+1} name ${activity.name}, date: ${activity.dates}`);
    });
}

rp(initialGet)
    .then(function(data){
        printActivities(data);
        return rp(firstPost)
    }).then(function(data){
        printActivities(data);
});

/*
    const rp = require("request-promise-native");
    const verbose = false;
    const bigText = `A really big block of text: A still more...`;
    let firstPost = {
    uri: "http://127.0.0.11:1711/activities",
    json: true,
    method: "POST",
    body: { name: "Happy Wind Afternoons", dates: "Whenever the wind blows" }
    };
    const longBody = { name: bigText, dates: "Millions and Millions" };
    const badPost = Object.assign({}, firstPost, { body: longBody });
    // initialGet, anotherGoodPost omitted to save space
    function printActivities(data) {
    console.log(`Currently ${data.length} activities`);
    if (!verbose) {
    return;
    }
    data.forEach(function(activity, i) {
    console.log(
    `Activity ${i + 1} name ${activity.name}, date: ${activity.dates}`
    );
    });
    }
    // Ordered promise chain
    rp(initialGet)
    10
    .then(function(data) {
    console.log("Initial Get of activities")
    printActivities(data);
    return rp(firstPost);
    })
    .then(function(data) {
    console.log("After First Good Activity Post")
    printActivities(data);
    return rp(badPost);
    })
    .then(function(data) {
    // This branch won't be taken
    printActivities(data);
    return rp(anotherGoodPost);
    })
    .catch(function(err) {
    console.log("After First Bad Activity Post")
    console.log(`Error: ${err}`);
    return rp(anotherGoodPost);
    })
    .then(function(data) {
    console.log("After Another Good Activity Post")
    printActivities(data);
    });


*/