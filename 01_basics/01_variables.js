const accountId = 144335;
let accountEmail = "bikashthapa357@gmail.com";
var accountPassword = "12345";
accountCity = "Kathmandu";
let accountState;

/*
    Prefer not to use var
    because of issues in block scope and functional scope
*/

accountEmail = "abc@gmail.com";
accountPassword = "234567";
accountCity = "Pokhara";
// accountId = 2 //not allowed
console.log(accountId);
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
