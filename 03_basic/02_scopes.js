// var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
}


// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const userName = "raju"

    function two() {
        const website = "youtube"
        console.log(userName);
    }
    // console.log(website);

    // two()
}

// one()



if (true) {
    const userName = "raju"
    if(userName === "raju") {
        const website = " youtube"
        // console.log(userName + website);
    }
    // console.log(website);
}
// console.log(userName);





// +++++++++++++++ Interesiting ++++++++++++++++
console.log(addOne(5)); 
function addOne(num) {
    return num + 1
}



addTwo(7) // Error
const addTwo = function(num) {
    return num + 2
}

