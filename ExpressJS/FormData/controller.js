const { createReadStream } = require("node:fs");

let displayHomePage = (req, res) => {
  createReadStream("./pages/index.html", "utf-8").pipe(res);
};

module.exports = {
  displayHomePage,
};
