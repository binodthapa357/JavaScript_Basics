function setUsername(username){
    this.username = username
    console.log("called");
    
}
function createUser(username, email, password){
    setUsername.call(this, username)
    this.email = email
    this.password = password

}

const bikash = new createUser('bikash', 'bikash123@mail.com', 1234)
console.log(bikash);
