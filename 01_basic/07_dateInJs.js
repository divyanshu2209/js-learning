// Dates
 let myDate = new Date()
 
//  console.log(myDate.toString());
//  console.log(myDate.toDateString());
//  console.log(myDate.toLocaleString());

// console.log(typeof myDate); //object

// let myCreatedDate = new Date(2023, 0 ,23) //Mon Jan 23 2023
// console.log(myCtreatDate.toDateString());

// let myCreatedDate = new Date(2023, 0 ,23, 5 ,3) 
// 1/23/2023, 5:03:00 AM
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("01-14-2023") 
//1/14/2023, 12:00:00 AM
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now() / 1000)); //to convert it to seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()); // 0 - jan 11 - dec
console.log(newDate.getFullYear());


let thisWeek = newDate.toLocaleString('default', {
    weekday : "long",
})

console.log(thisWeek);  // Your day in full words like eg :"Sunday"