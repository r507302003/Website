function winner(name) {
  console.log(`The winner is ${name}`);
}
myP1 = new Promise(function(resolve, reject){
    setTimeout(()=>resolve("P1"), 1);
});
myP2 = new Promise(function(resolve, reject){
    setTimeout(()=>resolve("P2"), 2);
});
myP3 = new Promise(function(resolve, reject){
    setTimeout(()=>resolve("P3"), 3);
});


setTimeout(function(){
    myPs = [myP1, myP2, myP3];
    racingPs = Promise.race(myPs);
    winner(racingPs);
},2000);