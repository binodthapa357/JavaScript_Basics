// for of loop

// ["", "", ""];
// [{}, {}, {}];

const arr = [1, 2, 3, 4, 5];

for (const element of arr) {
  //console.log(element);
}

const greetings = "Hello World!";
for (const greet of greetings) {
  //console.log(`Each char is ${greet}`);
}

// Maps
const map = new Map();
map.set("NEP", "Nepal");
map.set("IND", "India");
map.set("BAN", "Bangladesh");
map.set("NEP", "Nepal");

//console.log(map);

for (const [key, value] of map) {
  //   console.log(key, ":-", value);
}

const myObject = {
  game1: "PUB G",
  game2: "FF",
  game3: "Car Game",
};

// for (const [key, value] of myObject) {
//   console.log(key, ":-", value);
// }
