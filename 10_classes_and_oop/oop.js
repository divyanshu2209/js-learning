const user = {
    username: "divyanshu",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.getUserDetails());
console.log(this);


// ++++++++++++ Constructor Funtion ++++++++++

// const date = new Date()
// const promiseOne = new Promise()

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}

const userOne = new User("raj" ,12 ,true)
const userTwo = new User("manish" ,11 ,false)
console.log(userTwo);