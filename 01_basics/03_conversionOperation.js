let score = null;
console.log(typeof score);
console.log(typeof score);
let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => easily convert to number 33
// "33abc" => NaN (Not a Number)
// true => convert to "1"; false => "0"

let isLoggedIn = 1;
let boleeanisLoggedIn = Boolean(isLoggedIn);
console.log(typeof boleeanisLoggedIn);
console.log(boleeanisLoggedIn);

// 1 => true, 0 => false
// "<empty string>" => false
// "Bikash" => true

let someNumber = 12;
let someString = String(someNumber);
console.log(someString);
console.log(typeof someString);

// ********************* Operations ******************** //

let value = 3;
let negValue = -value;
console.log(negValue);

//console.log(2+2)
//console.log(2-2)
//console.log(2*2)
//console.log(2**3)
//console.log(2/2)
//console.log(2%2)

// String Concatidication
let str1 = "hello"
let str2 = " bikash"
let str3 = str1 + str2
console.log(str3)

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);

//link to study furthermore
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment