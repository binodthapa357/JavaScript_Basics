// const coding = ["js", "java", "ruby", "python", "C++"];

// const values = coding.forEach((item) => {
//   //console.log(item);
//   return item
// });
// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNums.filter( (num) => {
//    return num > 4
// })
// const newNums = [];
// myNums.forEach((num) => {
//   if (num > 4) {
//     newNums.push(num);
//   }
// });
// console.log(newNums);

const books = [
  {
    title: "Book One",
    genre: "Fiction",
    publish: 1981,
    edition: 2004,
  },
  {
    title: "Book Two",
    genre: "Non-fiction",
    publish: 1985,
    edition: 2007,
  },
  {
    title: "Book Three",
    genre: "History",
    publish: 1988,
    edition: 2002,
  },
  {
    title: "Book Four",
    genre: "Science",
    publish: 1989,
    edition: 2003,
  },
  {
    title: "Book Five",
    genre: "History",
    publish: 2001,
    edition: 2003,
  },
];

let userBooks = books.filter((bk) => {
  return bk.genre === "History";
});

userBooks = books.filter((bk) => {
  return bk.publish > 1985 && bk.genre === "Science";
});
console.log(userBooks);
