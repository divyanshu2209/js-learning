const myNums = [1, 2, 3]

// myTotal = myNums.reduce(function(acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)



// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)


// myTotal = myNums.reduce((acc, currval) => {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)
// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

myTotalPrice = shoppingCart.reduce((acc, currval) => (acc + currval.price), 0)
console.log(`The total price is: ${myTotalPrice}`);