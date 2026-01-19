const user = {
  username: "bikash",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`); // "this" keyword refers current context
    console.log(this);
  },
};
// user.welcomeMessage()
// user.username = "ram"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let username = "Bikash"
//     console.log(this.username);

// }
// chai()

// const chai = function(){
//      let username = "Bikash"
//      console.log(this.username);
// }
// chai()

const chai = () => {
  let username = "Bikash";
  console.log(this);
};
// chai()

////Exciplicit Return ----- function using return keyword

// const addTwoNum = (num1, num2) => {
//     return num1 + num2
// }

//--------------Implicit Return Arrow Function--------------
// const addTwoNum = (num1, num2) =>  num1 + num2
// const addTwoNum = (num1, num2) => ( num1 + num2)

const addTwoNum = (num1, num2) => ({ username: "Bikash" });
console.log(addTwoNum(3, 3));

// const myArray = [2, 3, 4, 5, 7]
// myArray.forEach(function () {})
