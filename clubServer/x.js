const bcrypt = require('bcryptjs');
// Hashing a password prior to storage
let salt = bcrypt.genSaltSync(10); // New salt everytime!
let passHash = bcrypt.hashSync("MyPassWordThing", salt);
console.log(passHash);










sync/await  --  javascript


function square(x){return x*x}
async function asquare(x){return x*x}

// regular function returns a value
console.log(square(8));
// async function returns a promise
asquare(8).then(y => console.log(y));

[returnvalue] = await expression; // plain value or promise



// await EXAMPLE
function square(x){return x*x}
async function asquare(x){return x*x}

async function test() {
  p1 = new Promise(function(resolve, reject){
      setTimeout(()=>resolve("Hi Class!"), 1000);
  });
  let x = await square(9); // wait for a value
  let y = await asquare(10); // wait for async fuction
  console.log(`x= ${x}, y=${y}, at ${new Date()}`);
  let msg = await p1; // wait for a promise
  console.log(`message = ${msg}, at ${new Date()}`);
}

console.log(`Starting test at ${new Date()}`);
test();
console.log(`Finished calling test`);

// REJECTION
function square(x){return x*x}
async function asquare(x){return x*x}

async function test() {
  p1 = new Promise(function(resolve, reject){
      setTimeout(()=>reject("Surprise Class!"), 2000);
  });
  let x = await square(9); // wait for a value
  let y = await asquare(10); // wait for async fuction
  console.log(`x= ${x}, y=${y}, at ${new Date()}`);
  let msg = await p1; // wait for a promise
  console.log(`message = ${msg}, at ${new Date()}`);
}

console.log(`Starting reject test at ${new Date()}`);
test();
console.log(`Finished calling reject test`);

//EXCEPTION

function square(x){return x*x}
async function asquare(x){return x*x}

async function test() {
  try {
    p1 = new Promise(function(resolve, reject){
        setTimeout(()=>reject("Surprise Class!"), 2000);
    });
    let x = await square(9); // wait for a value
    let y = await asquare(10); // wait for async fuction
    console.log(`x= ${x}, y=${y}, at ${new Date()}`);
    let msg = await p1; // wait for a promise
    console.log(`message = ${msg}, at ${new Date()}`);
  } catch (e) {
    console.log(`exception: ${e}`);
  }
}

console.log(`Starting reject test 2 at ${new Date()}`);
test();
console.log(`Finished calling reject test 2`);