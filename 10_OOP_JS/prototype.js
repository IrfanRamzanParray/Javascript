// let myName = "Irfan     "
// console.log(myName.truelength);

//console.log(myName.trim().length);

let myHeroes = ["thor","spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is${this.spiderman}`);
    }
}

Object.prototype.irfan = function(){
    console.log(`irfan is present in all objects`);
}

//heroPower.irfan()
Array.prototype.heyIrfan = function(){
    console.log('Irfan says hello');
}
myHeroes.irfan()
myHeroes.heyIrfan()

const User = {
    name: "ifi",
    email: "ifi@gmail.com"
}

//INHERITENCE
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode   "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`)
}

anotherUsername.trueLength()
"irfan and sahil          ".trueLength()