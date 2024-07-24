// const desciptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(desciptor);

/*{
    value: 3.141592653589793,
    writable: false,
    enumerable: false,
    configurable: false
  } */

// console.log(Math.PI);

const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nahi bani");
    }
}

console.log(chai);
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));
/*
{
  value: 'ginger chai',
  writable: true,
  enumerable: true,
  configurable: true
} 
*/

// Object.defineProperty(chai, "name", {
//     writable: false,
//     enumerable: false
// })
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
    
}