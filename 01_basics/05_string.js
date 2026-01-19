const name = "Bikash";
let repo_count = 50;

//  console.log(name + repo_count + " value"); [outdated syntax]

console.log(`Heloo my name is ${name} and my repo count is ${repo_count}.`);

const gameName = new String("free-fr-ee");
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('e'));

let newString = gameName.substring(0, 3);
console.log(newString);

let anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "  Ram  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://bikash.com/bikash%20thapa"
console.log(url.replace('%20', '-'))

console.log(url.includes('bikash'));

console.log(gameName.split('-'));






