// // setTimeout(() => {
// for (let i = 0; i < 10000000000000000000000000000000000000000000; i++) {
//   console.log(i);
// }
// // });

// // // // for (let i = 0; i < 100; i++) {
// // // //   console.log(i);
// // // // }

// console.log("Start");
// // // console.log("middle");
// // // console.log("end");
// // // // 1 lakhs lines of code

// // let api = fetch("https://fakestoreapi.com/products");
// // // console.log(api);

// // api
// //   .then((data) => {
// //     // console.log(data); // response object
// //     let finalData = data.json();
// //     // console.log(finalData);
// //     finalData
// //       .then((payload) => {
// //         console.log(payload);
// //       })
// //       .catch((err) => {
// //         console.log(err);
// //       });
// //   })
// //   .catch((err) => {
// //     console.log("err occurred while fetching" + err);
// //   });

// const callAPI = async () => {
//   let api = await fetch("https://fakestoreapi.com/products");
//   // console.log(api);
//   let jsonData = await api.json();
//   console.log(jsonData);
// };

// // callAPI();

// console.log("hiii");
// console.log(global);

// // to execute any js file type command ==> node filename
// //! extension is not mandatory

let value = require("./NodeJS/Modules/Local Modules/functions");

console.log(value.add(2, 3));

// / let currentWord = "";
// let arr = [];
// let string = " my name  is     abc";
// // arr = ["my", "name", "is", "abc"]

// for (let i = 0; i < string.length; i++) {
//   if (string[i] !== " ") currentWord += string[i];
//   else {
//     if (currentWord.length > 0) {
//       arr.push(currentWord);
//       currentWord = "";
//     }
//   }
// }
// if (currentWord.length > 0) arr.push(currentWord);

// console.log(arr);

// arr = ["my", "name", "is", "abc"]

// arr = ["ym", "eman", "si", "cba"] expected output

let fs = require("fs");

let stream = fs.createReadStream("./fs.js", { highWaterMark: 10 });

stream.on("data", (chunk) => {
  console.log(`chunk size: ${chunk.length} ------ ${chunk}`);
});
