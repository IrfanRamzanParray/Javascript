// function chai(){
//     let username = "irfan";
//     console.log(this.username);
// }

// chai()

// const chai = function(){
//     let username = "irfan"
//     console.log(this.username)
// }

const chai = () => {
    let username = "hitesh"
    console.log(this)
}
//chai()

// const addTwo = (num1,num2) =>{
//     return num1+num2
// }
//const result = addTwo(3,5)

// const addTwo = (num1, num2) =>(num1+num2) 
// console.log(addTwo(3,5))

//Immediately Invoked Function Expression(IIFE)
(function chai(){     //named iife
    console.log("DB connected");
})();

//IIFE with arrow function
((name)=>{            //un-named iife
    console.log(`DB connected two ${name}`);
})(`irfan`);