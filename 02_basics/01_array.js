//array  = The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

const myArr = [0,1,2,3,4,5]
const myHeros = ["Spider-man", "Super-man", "Bat-man", "Thor", "Iron-man"]
const myArr2 = new Array(1,2,3,4,5)
// console.log(myArr[1]);

//Array Methods
// myArr.push(6) // add new elements in the array
// myArr.push(7)
// myArr.pop() // remove recent add elememt in array

// myArr.unshift(9) // add new element to the first index of array
// myArr.shift()

// console.log(myArr.includes(10));
// console.log(myArr.indexOf(2));

// const newArr = myArr.join()
// console.log(newArr);
// console.log(typeof newArr);

// console.log(myArr);

// slice && splice
console.log("A ", myArr)

const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3) //manipulate original array 
console.log("C ", myArr);
console.log(myn2);




