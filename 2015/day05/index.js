const readFile = require("../../utils/readFile");

const input = readFile("2015/day05/input.in").trim();

const findNiceStringsOldRules = (input) => {
  let niceStrings = 0;
  const words = input.split("\n");

  const vowelRegex = /[aeiou]/g;
  const doubleLetterRegex = /(.)\1/;
  const forbiddenRegex = /(ab|cd|pq|xy)/;

  for (let word of words) {
    const vowelCount = (word.match(vowelRegex) || []).length;
    if (vowelCount >= 3 && doubleLetterRegex.test(word) && !forbiddenRegex.test(word)) {
      niceStrings++;
    }
  }

  console.log(`Number of nice strings (Old Rules): ${niceStrings}`);
};

const findNiceStringsNewRules = (input) => {
  let niceStrings = 0;
  const words = input.split("\n");

  const pairTwiceRegex = /(..).*\1/;
  const repeatWithGapRegex = /(.).\1/;

  for (let word of words) {
    if (pairTwiceRegex.test(word) && repeatWithGapRegex.test(word)) {
      niceStrings++;
    }
  }

  console.log(`Number of nice strings (New Rules): ${niceStrings}`);
};

findNiceStringsOldRules(input);
findNiceStringsNewRules(input);
