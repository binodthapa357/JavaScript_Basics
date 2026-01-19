const promiseOne = new Promise(function (reslove, reject) {
  //do an async task
  //DB class, cryptography, network calls
  setTimeout(function () {
    console.log("Async task is complete.");
    reslove();
  }, 1000);
});
promiseOne.then(function () {
  console.log("Promise Consumed");
});

new Promise(function (reslove, reject) {
  setTimeout(function () {
    console.log("Async Task Two");
    reslove();
  }, 1000);
}).then(function () {
  console.log("Promise 2 resolved");
});

const PromiseThree = new Promise(function (reslove, reject) {
  setTimeout(function () {
    reslove({ username: "Bikash", email: "bikash@gmail.com" });
  }, 1000);
});
PromiseThree.then(function (user) {
  console.log(user);
});

const PromiseFour = new Promise(function (reslove, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      reslove({ username: "bikash", password: "123" });
    } else {
      reject("ERROR: something went wrong");
    }
  }, 1000);
});
PromiseFour.then((user) => {
  console.log(user);
  return user.username;
})
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected.");
  });

const PromiseFive = new Promise(function (reslove, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      reslove({ username: "javascript", password: "123" });
    } else {
      reject("ERROR: js went worng");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await PromiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     // console.log(response);

//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E :", error);
//   }
// }
// getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
