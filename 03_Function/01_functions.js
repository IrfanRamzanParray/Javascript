function sayMyName(){
    console.log("I")
    console.log("R")
    console.log("F")
    console.log("A")
    console.log("N")
}
//sayMyName();
function addTwoNumbers(number1,number2)
{
   let result = number1+number2;
   return result;
}
const result = addTwoNumbers(5,6);

//console.log("Result",result);


function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter username");
        return

    }
    return `${username} just logged in`;
}
//const userN = loginUserMessage("irfan");
console.log(loginUserMessage());
//console.log(userN);


//******** variable length arguments*/

function calculateCartPrice(val1, val2,...num1){
    console.log(val1);
    
    return num1
}
console.log(calculateCartPrice(200,400,500, 20000));



/* passing object in function */
const user = {
    username: "irfan",
    price: 15000
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is 
        ${anyobject.price}`);

}
handleObject(user);


/*******passing array to function */

const myNewArray = [20, 45, 24, 78];
function returnSecondValue(getarray){
    return myNewArray[1]

}
console.log(returnSecondValue(myNewArray));

