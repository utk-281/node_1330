// setTimeout(() => {
for (let i = 0; i < 10000000000000000000000000000000000000000000; i++) {
  console.log(i);
}
// });

// // // for (let i = 0; i < 100; i++) {
// // //   console.log(i);
// // // }

console.log("Start");
// // console.log("middle");
// // console.log("end");
// // // 1 lakhs lines of code

// let api = fetch("https://fakestoreapi.com/products");
// // console.log(api);

// api
//   .then((data) => {
//     // console.log(data); // response object
//     let finalData = data.json();
//     // console.log(finalData);
//     finalData
//       .then((payload) => {
//         console.log(payload);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   })
//   .catch((err) => {
//     console.log("err occurred while fetching" + err);
//   });

const callAPI = async () => {
  let api = await fetch("https://fakestoreapi.com/products");
  // console.log(api);
  let jsonData = await api.json();
  console.log(jsonData);
};

// callAPI();

console.log("hiii");
console.log(global);

// to execute any js file type command ==> node filename
//! extension is not mandatory
