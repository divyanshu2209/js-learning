let score = "33abc"

// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof(valueInNumber));
// console.log(valueInNumber);

// console.log(typeof(NaN)); // type : number

/*
"33" => 33
"33abc" => NaN
true => 1; fales => 0;
*/

let isLoggedIn = 1

let valueInBoolean = Boolean(isLoggedIn)
// console.log(typeof(valueInBoolean));
// console.log(valueInBoolean);

/*
1 => true ; 0 => false
""(empty string) => false
"divyanshu" => true
*/

let someNumber = 22
let valueInString = String(someNumber)
console.log(valueInString);
console.log(typeof(valueInString));
