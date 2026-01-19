const user = {
  usrename: "bikash",
  loginCount: 8,
  signedIn: true,
  getUserDetails: function () {
    // console.log("Got user detailes  form database.");
    // console.log(` Username: ${this.usrename}`);
    console.log(this);
  },
};

// console.log(user.usrename);
//console.log(user.getUserDetails())
// console.log(this);

// const promiseOne = new Promise() //new ---> constructor object
// const date = new Date()

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };
  return this;
}
const userOne = new User("hitesh", 12, true);
const userTwo = new User("bikash", 11, false);
console.log(userOne.constructor);
// console.log(userTwo);

// when we user new keyword first the {} empty object will be created which is called instances
