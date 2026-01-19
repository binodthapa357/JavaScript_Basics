class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}   
const bikash = new User('bikash', 'bikash@gmail.com', "123")

console.log(bikash.encryptPassword());
console.log(bikash.changeUsername());

//behind the scene
function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password

}
User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const binod = new User('binod', 'binod@gmail.com', "345")

console.log(binod.encryptPassword());
console.log(binod.changeUsername());
