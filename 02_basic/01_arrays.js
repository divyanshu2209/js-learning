// array

const myArr = [0, 1, 2, 3, 4, 5]

/*
shallow copy => it shares some reference point and it is used in JavaScript array/

deep copy => it does not share same reference point.
*/

const myHeroes = ["ironman", "captain-ameria"]

const myArr2 = new Array(1, 2, 3, 4)

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) // used to insert in first place (!should not be used as it is time consuming)
// myArr.shift() //removes first element


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join() // changes to a string

// console.log(myArr); 
// console.log(newArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

/*
slice => returns a subarray (doesnt change original array)
splice => remove particular section of array and the array changes
*/