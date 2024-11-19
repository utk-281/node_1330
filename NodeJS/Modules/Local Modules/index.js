// greet();

//! there are two ways to import

//! 1) 1st way ==> we will store the object in a variable and will access it's properties using dot(.) operator
// let value = require("./app");
// syntax ==> let variableName = require("path of the file")
// console.log(value);
// console.log(value.add(1, 2));
// console.log(value.address);

// value.bye();
// console.log(value.name);
// value();

//! 2) 2nd way ==> destructuring the object
// let { name, bye, greet } = require("./app");

// console.log(name);
// bye();
// greet();

let { add, address } = require("./app");
console.log(add(3, 4));
console.log(address);
