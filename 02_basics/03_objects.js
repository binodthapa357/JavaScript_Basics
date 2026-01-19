// singleton = object created using Constructor
// Object.create

//object_literals

const mySym = Symbol("key1");
const JS_Users = {
  name: "Bikash",
  "full name": "Bikash Thapa",
  [mySym]: "mykey1",
  age: 22,
  location: "Kathmandu",
  email: "bikash@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Wednesday", "Friday"],
};
console.log(JS_Users.email);
console.log(JS_Users["email"]);
console.log(JS_Users["full name"]);
console.log(JS_Users[mySym]);
console.log(JS_Users["name"]);

JS_Users.name = "Binod";
console.log(JS_Users["name"]);

// Object.freeze(JS_Users);
//JS_Users.name = "Hari";
//console.log(JS_Users["name"]);
//console.log(JS_Users);

JS_Users.greetings = function(){
    console.log("Hello JS_Users");
    
}
console.log(JS_Users.greetings());

JS_Users.greetingsTwo = function(){
    console.log(`Hello JS_Users, ${this.name}`);
    
}
console.log(JS_Users.greetingsTwo());


