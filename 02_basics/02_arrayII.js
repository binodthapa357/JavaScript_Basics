const marvel_heros = ["thor", "spider-man", "iron-man"]
const dc_heros = ["super-man", "bat-man", "flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3] [1]);

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);


//Spread Operator
const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Harry"))
console.log(Array.from("Harry"))
console.log(Array.from({name : "harry"}));

let score_1 = 100
let score_2 = 200
let score_3 = 300

console.log(Array.of (score_1, score_2, score_3));







