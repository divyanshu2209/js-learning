class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}raju`
    }
    set password(value){
        this._password = value
    }
}

const divyanshu = new User("raj@google.com", "abc")
console.log(divyanshu.password);
console.log(divyanshu.email);