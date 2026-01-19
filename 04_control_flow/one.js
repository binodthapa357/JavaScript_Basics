// if - statement

const isUserLoggedin = true;
const temperature = 40;

// if (temperature < 50) {
//   console.log("less than 50");
// } else {
//   console.log("temperatuure is greater than 50");
// }

// Comparison Operators = <, >, <=, >=, ==, !=, ===(strict equal also check data type), !==

// const score = 200
// if (score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`);

// }
// console.log(`User power: ${power}`);

// const balance = 1000;
// if (balance > 500) console.log("test"),
// console.log("test 2");
// ;
// if (balance < 500) {
//   console.log("less than 500");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if (balance < 900) {
//   console.log("less than 900");
// } else {
//   console.log("less than 1200");
// }

const userLoggedin = true
const debitCard = true
const loggedinFromGoogle = false
const LoggedInFromEmail = true
if (userLoggedin && debitCard && 2==3) {
    console.log("user allowed to purchase");
    
}
if (loggedinFromGoogle || LoggedInFromEmail){
    console.log("user logged in");
    
}
