// data_type are mainly divided into two parts: Primitive and Non-Primitive on the basic of how they store in the memory and how can they access.

// Primitive Data Type : String, integer, boolean, null, undefined, symbol (unique), bigInt
const score = 100;
const scoreValue = 100.2;
const isLoggedin = true;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id == anotherId);

const bigNumber = 1234567890003049n;

// Non-Primitive or References Data Type : Array, objects, functions

const heros = ["spiderman", "superman", "batman"];
let myobj = {
  name: "Bikash",
  age: 22,
  location: "Nepal",
};

const myFunction = function () {
  console.log("hello world");
};

console.log(typeof score);

// Memory Types; Stack (Primitive Type) and Heap (Non-Primitive Type)

let myYoutubeName = "Bikash_Editz";
let anotherYoutubeName = myYoutubeName;
anotherYoutubeName = "Binod_Editz";

console.log(myYoutubeName);
console.log(anotherYoutubeName);

let userOne = {
    email: "user12@gmail.com",
    location: "Nepal"
}

let userTwo = userOne
userTwo.email = "bikash@google.com"

console.log(userOne.email);
console.log(userTwo.email);

