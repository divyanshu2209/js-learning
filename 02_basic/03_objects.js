// singleton

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Divyanshu",
    "full name" : "Divyanshu Rai",
    [mySym] : "mykey1",
    age : 18,
    location : "Lucknow",
    email : "divyanshu@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "divyanshu@gmail.com"
// Object.freeze(JsUser) // After this nothing can not be changed in the object
JsUser.email = "divyanshu@yahoo.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js user!");
}
JsUser.greeting2 = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());