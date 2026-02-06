//for loop

for (let i = 0; i <= 10; i++) {
    const element = i; 
    console.log(element);
      
}


for (let i = 0; i < 10; i++) {
    console.log(`outer loop value: ${i}`);
    for (let j = 0; j < 10; j++) {
        //console.log(`Inner looop value: ${j} and inner loop ${i}`)  
        console.log(i +'*'+j+' = '+ i*j)
    }   
}

let myArray = ["hi", "how", "are", "you"]
for (let index = 0; index < myArray.length; index++) {
    const element =myArray[index];
    console.log(element)    
}
//break and continue

for (let index = 1; index <= 20; index++) {
    if (index ==5){
              console.log("detected 5");
              //break
              continue
    }
  console.log(`value of i is ${index}`)
    
}