const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )


// coding.forEach( (val) => (console.log(val)))


// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)


// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })



const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
]

myCoding.forEach( (value) => {
    console.log(`${value.languageFileName} and ${value.languageName} .`);
})

// const firstArray = [1, 3, 5, 6, 7]

// firstArray.forEach( (value,index) => {
//     console.log(`The value is: ${value} and the index is: ${index}`);
// })

