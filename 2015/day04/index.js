const crypto = require('crypto');

const readFile = require("../../utils/readFile");

const input = readFile("2015/day04/input.in").trim();

const findLowestNumberMD5 = (input, prefix) => {
  let number = 0;

  while (true) {
    let hash = crypto.createHash('md5').update(input + number).digest('hex');

    if (hash.startsWith(prefix)) {
      return number;
    }
    
    number++;
  }
}

console.log("cart 1:", findLowestNumberMD5(input, "00000"));
console.log("Part 2:", findLowestNumberMD5(input, "000000"));
