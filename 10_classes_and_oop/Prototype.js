// let myName = 'bikash     '
// let myName2 = 'ram    '
// // console.log(myName.trim().length);
// console.log(myName.trueLength);

let myHeros = ['thor', 'spiderman']
let heroPower = {
    thor: "hammer",
    spiderman: 'sling',
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}
Object.prototype.bikash = function(){
    console.log(`bikash is present in all object`);
    
}
Array.prototype.heybikash = function(){
    console.log(`bikash say hello.`);
    
}
// heroPower.bikash()
myHeros.bikash()
myHeros.heybikash()
// heroPower.heybikash()


//inheritance
const user = {
    name: 'bikash',
    email: 'bikash123@gmail.com'
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TAsupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__ = user

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = 'bikash   '
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`true length is: ${this.trim(),this.length}`);
    
    
}
anotherUsername.trueLength()
'binod'.trueLength()
"iceTea".trueLength()
