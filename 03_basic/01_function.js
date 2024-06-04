

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
console.log(loginUserMessage("Raju"));