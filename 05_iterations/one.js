// for

// for (let i = 0; i < 10; i++) {
//     // console.log("Number is: ",i);
//     console.log(i);
//     if(i == 5) {
//         console.log("5 is the best number");
//     }
    
// }

// i is in local scope so it can note be accessed outside


for (let i = 1; i < 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j < 10; j++) {
    // console.log(`Inner loop value: ${j} and inner loop ${i}`);
    // console.log(i + ' * ' + j + ' = '+ i*j);
        }
}


let myArray = ["flash", "batman", "superman"]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
    
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5){
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`Value of i is ${index}`);
    
// }


for (let index = 1; index <= 10; index++) {
    if (index == 5){
        console.log(`Detected 5`);
        continue; // ek baar kaafi
    }
    console.log(`Value of i is ${index}`);
    
}