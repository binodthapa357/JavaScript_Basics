// Singleton Objects
// const facebookUsers = new Object() //----> singleton object

const facebookUsers = {} //Non singleton object

facebookUsers.id = "123abc"
facebookUsers.name = "Sammy"
facebookUsers.isLoggedIn = false
// console.log(facebookUsers);

const regularUsers = {
    email: "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "bikash",
            lastname : "thapa"
        }
    }
}

// console.log(regularUsers.fullname.userfullname.firstname);

//object merging
const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "a",
    4: "b"
}
const obj4 = {
    5: "a",
    6: "b"
}


// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
]

users[1].email
// console.log(facebookUsers);
// console.log(Object.keys(facebookUsers));
// console.log(Object.values(facebookUsers));
// console.log(Object.entries(facebookUsers));

// console.log(facebookUsers.hasOwnProperty('id'));

const course = {
    coursename: "JavaSript",
    price: 999,
    courseInstructor: "bikash"
}

const {courseInstructor: instructor} = course
//console.log(courseInstructor);
console.log(instructor);



