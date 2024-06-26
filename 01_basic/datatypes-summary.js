// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// JavaScript is a dynamically typed language

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(typeof(anotherId));

// console.log(id === anotherId);

const bigNumber = 36546546545645n
// console.log(typeof(bigNumber));




// Reference (Non primitive)

// Array, Objects, Functions


const heros = ["shaktiman", "nagraj", "bheem"] //Arrays


// Object in curly braces

let myObject = {
    name : "Divyanshu",
    age : 22,
}


 // Function
const myFunction = function() {
    console.log("Hello World!");
}

// console.log(typeof(myFunction)); Function

/*

typeof(undefined) => undefined
typeof(null) => object
typeof(boolean) => boolean
typeof(number) => number
typeof(string) => string
typeof(object) => object
typeof(function) => function

*/

// Link for future revision : (ctrl + f) 'Type of val'
// https://262.ecma-international.org/5.1/#sec-11.4.3 

 // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

 // Stack (Primitive) , Heap (Non-Primitive)

 let myYoutubeName = "divyanshuraidotcom"

 let anotherName = myYoutubeName
 anotherName = "hellocode"

//  console.log(anotherName);
//  console.log(myYoutubeName);

 let userOne = {
    email : "user@gmail.com",
    upiId : "userone@ybl"
 }
 let userTwo = userOne

 userTwo.email = "user2@gmail.com"

 console.log(userOne.email);
 console.log(userTwo.email);

 //Stack => We get a copy of value in stack allocation
 //Heap => We get a reference of value in heap allocation