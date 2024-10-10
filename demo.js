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

//! promises ==> it is an object that represents the eventual completion or failure of an asynchronous operation

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

//! fetch ==> it is a function that returns a promise
// let api = fetch("https://jsonplaceholder.typicode.com/todos");

// let api = fetch("something");
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

//! async and await ==> it is a function that returns a promise
// async function api() {
//   try {
//     let api = await fetch("something");
//     let finalData = await api.json();
//     console.log(finalData);
//   } catch (error) {
//     console.log(error);
//   }
// }

//! array ==> it is an object that represents a collection of data
// let arr = ["hello", "world", "hello", "world"];
// console.log(object);

//! objects ==> it is an object that represents a collection of data
// let emp = {
//   name: "John",
//   age: 30,
//   city: "New York",
//   skills: ["JavaScript", "React", "Node.js"],
//   age: 34,
//   city: "mumbai",
//   0: "hello",
// };
// console.log(emp.city);
// console.log(emp[0]);

// let EventEmitter = require("node:events");

// let event = new EventEmitter();

// // emit("event-name") ==> it is used to emit/define (custom) an event
// // on("event-name", cb) ==> it is used to listen/catch an event
// event.on("myCustomEvent", (chunks) => {
//   console.log(chunks.number);
//   console.log("event called");
// });

// event.emit("myCustomEvent", { message: "hello world", number: 1245, obj: {}, arr: [1, 2, 3] });

let string = "string";
console.log(string.split("").reverse().join(""));
