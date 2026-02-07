const myNums = [1,2,3]
// const myTotal = myNums.reduce(function (acc, curval) {
//           console.log(`acc:${acc} and curval: ${curval}`);
//           return acc+curval
// }, 10);
// console.log(myTotal)

/********************************************* */

const myTotal = myNums.reduce((acc,curr) => acc+curr,0)
console.log(myTotal)