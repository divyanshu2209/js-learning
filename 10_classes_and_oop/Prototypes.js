// let myName = "divyanshu    "

// console.log(myName.trueLength);


let myHeros =["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spderman: "sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spderman}`);
    }
}

Object.prototype.divyanshu = function(){
    console.log(`divyanshu is present in all objects`);
}

// heroPower.divyanshu()

// myHeros.divyanshu()

Array.prototype.heyDivyanshu = function(){
    console.log(`Divyanshu says hello!`);
}

// array mai power daali hai toh array mai hi rahegi baaki objects mai nahi jaaegi

myHeros.heyDivyanshu()
// heroPower.heyDivyanshu()


// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

Object.setPrototypeOf(TeachingSupport, Teacher)





let anotherUserName = "ChaiAurCode      "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherUserName.trueLength()

"divyanshu".trueLength()
"iceTea".trueLength()