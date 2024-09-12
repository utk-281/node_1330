const fs = require("fs");

exports.function1 = (req, res) => {
  fs.createReadStream("./public/home.html").pipe(res);
};

exports.function2 = (req, res) => {
  //   res.send("form page");
  fs.createReadStream("./public/form.html").pipe(res);
};
