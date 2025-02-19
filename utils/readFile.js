const fs = require("fs");
const path = require("path");

const readFile = (filePath) => {
  return fs.readFileSync(path.resolve(__dirname, "..", filePath), "utf-8").trim();
};

module.exports = readFile;
