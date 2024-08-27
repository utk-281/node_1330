//! synchronous or blocking code ==> it blocks the main thread.
// console.log("hello");
// console.log("end");
// for (let i = 0; i < 1000; i++) {
//   console.log(i);
// }
// console.log("middle");

//! async or non-blocking code ==> the main thread does not get blocked
// console.log("start");
// console.log("middle");
// setTimeout(() => {
//   console.log("inside set timeout 1");
// }, 5000); //! minimum amount of time it should take to execute
// console.log("this statement will take around 100 seconds to execute");
// console.log("end");

//! promises

// let promise = new Promise((resolve, reject) => {
//   let a = 11;
//   if (a == 10) resolve("i'm resolved");
//   else reject("i'm rejected");
// });

// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// console.log(promise);

//! fetch

let api = fetch("something");
// console.log(api);
// api
//   .then((data) => {
//     console.log(data);
//     let finalData = data.json();
//     finalData
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//! async and await
async function api() {
  try {
    let api = await fetch("something");
    let finalData = await api.json();
    console.log(finalData);
  } catch (error) {
    console.log(error);
  }
}
