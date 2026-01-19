// truthy or falsely value
const userEmail = "h@bikash.ai";
if (userEmail) {
  console.log("Got user email");
} else {
  console.log("dont have user email");
}

//falsy values: false, 0, -0, Big Int 0n, "", null, undefined, NaN(Not a number)
//truthy values: "0", 'false', " ", [], {}, function() {}

if (userEmail.length === 0) {
  console.log("Array is empty");
}

const empObject = {};
if (Object.keys(empObject).length === 0) {
  console.log("Obj is empty");
}

// Nullish Coalescing Operators (??): null & undefined
let val1;
// val1 = 5 ?? 10

// val1 = null ?? 10

// val1 = undefined ?? 15

val1 = null ?? 10 ?? 15;

console.log(val1);

// Terniary Operators
// condition ? true : false
const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less that 80") : console.log("more than 80");
