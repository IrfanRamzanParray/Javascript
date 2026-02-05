let a =10
const b =30
var c = 40

if (true){
    let a =1000
const b =2000
var c = 3000
}

// console.log(a);
// console.log(b);
// console.log(c);

/**************Nested Scope*************/
function one(){
    const username = "irfan";

    function two(){
        const website = "youtube";
        console.log(username);
        
    }
   // console.log(website)
    two();
}
one();