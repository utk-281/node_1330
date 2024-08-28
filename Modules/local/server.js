// console.log(sum(1, 2));

//! 1st way of importing
let variableName = require("./app.js");
// require() ==> it is used to import a file and pass the path of the file inside require()

// console.log(variableName);
// console.log(sum(1, 2));
// console.log(variableName.sum(1, 2));
// console.log(variableName.sum(1, 22));
// console.log(variableName.sum(1, 21));
// console.log(variableName.sub(1, 2));
// console.log(variableName.multiply(1, 2));
// console.log(variableName.divide(1, 2));
// console.log(variableName.addition(1, 2));

//! 2nd way of importing ==> destructuring
let { addition, divide, multiply } = require("./app");
console.log(addition(2, 3));
console.log(divide(10, 2));
console.log(multiply(10, 2));
