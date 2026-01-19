
function sayMyName(){
    console.log("B");
    console.log("I");
    console.log("K");
    console.log("A");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumber(number1, number2){  // parameters - input during function definition
//     console.log(number1 + number2);
    
// }

function addTwoNumber(number1, number2){  // parameters - input during function definition
    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNumber(3, 4) // arguments - input during calling function
// console.log("Result:", result);

function loginUserMessage(username = "Ram"){
    // if (username === undefined) {
    if (!username) {
        console.log("Please enter user name");
        return   
    }
    return `${username} just logged in.`
}

// console.log(loginUserMessage("Bikash"))

// console.log(loginUserMessage("Bikash"))

function calculateCartPrice(...num1){ //rest operator
    return num1
}
console.log(calculateCartPrice(200, 300, 400))

const user = {
    usrename: "Bikash",
    price: 200
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.usrename} and price id ${anyobject.price}`);
    
}
// handleObject(user)
handleObject({
    usrename : "Ram",
    price: 200
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));


