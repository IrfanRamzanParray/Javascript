const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
//console.log(tinderUser);
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "irfan",
            lastname: "parray"
        }
    }
}
//console.log(regularUser.fullname.userfullname)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

const obj3 = {obj1,obj2}
//console.log(obj3)

const obj4 = Object.assign({},obj1,obj2)
//console.log(obj4)

const obj5 = {...obj1, ...obj2}
console.log(obj5)
console.log(Object.keys(regularUser));
console.log(Object.values(regularUser));