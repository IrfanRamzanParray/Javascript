//singleton
//Object.reate

//object literals
const mySym = Symbol("key1")
const jsUser = {
    name: "Irfan",
    age: 30,
    location: "srinagar",
    email: "fullu@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"],
    [mySym] : "mykey1"
}
//console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser[mySym]);

jsUser.email = "gullu@gmail.com";
console.log(jsUser);
console.log(jsUser["email"])

jsUser.greeting = function(){
    console.log(`Hello ${this.name}`);
}
jsUser.greeting()