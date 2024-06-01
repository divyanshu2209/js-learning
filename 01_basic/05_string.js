const name = "divyanshu"
const repoCount = 9

// console.log(name + repoCount + " Value"); Should not be used like this because of code readibility

//Use String interpolation

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('divyansh-uu')
// console.log(gameName);  Output : [String: 'divyanshuu']

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());


// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('d'));

const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-10, 6)
// console.log(anotherString)

const  newStringOne = "     divyanshu     "
// console.log(newStringOne);
// console.log(newStringOne.trim()); // removes white spaces


const url = "https://divyanshu.com/divyansu%20rai"

// console.log(url.replace('%20', '-'))  output :https://divyanshu.com/divyansu-rai


console.log(url.includes('rai'))

//Convert string into array


console.log(gameName.split('-'))