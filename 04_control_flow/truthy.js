const userEmail = "irfan.ai"
if(userEmail){
    console.log("got user email")
}else{
    console.log("dont have email")
}
/* falsy values: false, 0, Bigint, 0n, "", null, undefined, NaN*/
//truthy values: "0", "false"," ",[],{},function(){}



//NULLISH COALESCING OPERATOR (??): NULL UNDEFINED

let val1;
//val1 = 5?? 10
//val1 = null??10
//val1 = undefined??15
val1 = null?? 10??40

console.log(val1);


//TERNIARY OPERATOR

//condition? true: false

const iceTeaPrice = 100
iceTeaPrice>=80? console.log("less than 80"): console.log("more than 80")
