const greet = () => {
  console.log("hello world");
};
const bye = () => {
  console.log("bye world");
};

let name = "abc";

// greet();

//! there are two ways to export

//! 1) using module.exports ==> we will create a object and pass all the functions, variables, etc.. to be exported
// module.exports = { greet, bye, name };
//? this way can only be used if only on component is exporting
// module.exports = greet
// module.exports = bye
// module.exports = name

//! 2) 2nd way ==> we will use exports keyword at the time of declaration
exports.add = (a, b) => {
  return a + b;
};
exports.address = "address";
