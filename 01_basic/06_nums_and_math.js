const score = 400

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);


// console.log(balance.toFixed(2)); //method rounds the string to a specified number of decimals

const otherNumber = 1123.8659

// console.log(otherNumber.toPrecision(3));

// const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-IN'));
// console.log(hundreds.toLocaleString());


// ++++++++++++++++ Maths +++++++++++++++

// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.6));
// console.log(Math.floor(4.6));


// console.log(Math.min(4, 3, 3, 5));
// console.log(Math.max(4, 3, 3, 5));



console.log(Math.random());
console.log(Math.floor((Math.random() * 10) + 1));


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)