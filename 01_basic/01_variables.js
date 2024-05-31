const  accountId = 144553
let accountEmail = "divyanshu@google.com"
var accountPassword = "12345"
accountCity = "Jaipur" //should not be used like this

let accountState; // value will be undefined
//const : value cannot be changed

// accountId = 2 //not allowed

accountEmail = "raj@gmail.com"
accountPassword = "54321"
accountCity = "Lucknow"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
//console.table([va1,.,.,]) is used to print many variables at once in a tabular structure


/*
Prefer not to use var
because of issue in block scope and functional scope
*/