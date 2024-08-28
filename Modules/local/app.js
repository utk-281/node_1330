//! commonJS ==> by default nodeJS uses this format
//! ES6

function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

// let multiply = (a, b) => {
//   return a * b;
// };

let divide = (a, b) => {
  return a / b;
};

let hello = () => {
  console.log("hello");
};

// console.log(sum(1, 2));
// console.log(sum(1, 12));
// console.log(sum(11, 2));

//! first way of exporting
// module.exports = sum; // this module.exports can only happen once
// module.exports = sub;

// console.log(divide(10, 2));

// module.exports = { divide };

//! https://github.com/utk-281/node_1330

//! second way of exporting
exports.multiply = (a, b) => {
  return a * b;
};

exports.divide = (a, b) => {
  return a / b;
};

exports.addition = (a, b) => {
  return a + b;
};
