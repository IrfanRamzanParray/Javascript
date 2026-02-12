/*********FIRST PROMISE***************************** */
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
        //reject();
        },1000)
});

promiseOne.then(function(){
    console.log("Promise consumed");
})
/***************SECOND PROMISE****************************** */
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})

/**********************THIRD PROMISE******************************** */
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
    resolve({username: "Hill", email:"hill@example.com"})
    }, 1000)
});

promiseThree.then(function(user){
    console.log(user);

})
/*******************FORTH PROMISE*************************** */
