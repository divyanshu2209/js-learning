

function sayMyName() {
    console.log("R");
    console.log("A");
    console.log("J");
    console.log("U");
}
// sayMyName()


// number1 and number 2 are parameters

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumber(number1, number2){
    let result = number1 + number2
    return result
}

const result = addTwoNumber(3, 6)

// console.log("Result :", result);


function loginUserMessage(username = "sam") {
    if(username === undefined){   //(!username)
        console.log("Please enter a username");
        // return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Divyanshu"))
// console.log(loginUserMessage("Raju"));


// ...variable is a rest operator (which combines parameters) 

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 500)); // [ 500 ] 


const user = {
    username : "divyanshu",
    price : 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
// handleObject({
//     username : "raju",
//     price : 200
// })

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    console.log(getArray[1]); 
}

returnSecondValue(myNewArray)