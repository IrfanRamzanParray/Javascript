
const user = {
    username: "irfan",
    loginCount : 10,
    signedIn: true,

    getUserDetails: function(){
        //console.log("got user details from database");
        console.log(`Username:${this.username}`);
        console.log(this);
    }
}

const user2 = {
    username: "irfan",
    loginCount : 10,
    signedIn: true,

    getUserDetails: function(){
        //console.log("got user details from database");
        console.log(`Username:${this.username}`);
        console.log(this);
    }
}
console.log(user.username);
user.getUserDetails();
//const username = "hi how are you";
//console.log(this.username);

/********************CONSTRUCTOR FUNCTION*******************/
function myUser(username, loginCount, isLoggedIn){
     this.username = username;
     this.loginCount = loginCount;
     this.isLoggedIn = isLoggedIn;

    // return this;
}
const userOne = new myUser("irfan", 13, true);
const userTwo = new myUser("sahil", 16,false);
console.log(userOne);
console.log(userTwo);

