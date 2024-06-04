// The below one is the singleton object
// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullName : {
        userFullName : {
            firstName : "Divyanshu",
            lastName : "Rai"
        }
    }
}
// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2)


const obj3 = {...obj1, ...obj2} // spread
// console.log(obj3);

const users = [
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 1,
        email : "h@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); 

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

                    // Part 3 
// ++++++++++++++++ //

const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "divyanshu"
}

// course.courseInstructor

const {courseInstructor : instructor} = course

console.log(instructor);

/* JSON STRUCTURE
    {
        "name" : "divyanshu",
        "courseName" : "js in hindi",
        "price" : "free"
    } 

*/ 
