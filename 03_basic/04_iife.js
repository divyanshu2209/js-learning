// Immediately Incoked Function Expressions (IIFE)



(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // ";" use karte hai context rokne ke liye

// (definiton)(execution call)
// chai()



// IIFE in arrow function

( (name) => {
    console.log(`DB CONNECTED 2 ${name}`);
} )('Divyanshu');