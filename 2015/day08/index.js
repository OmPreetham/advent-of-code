const readFile = require("../../utils/readFile");

const input = readFile("2015/day08/input.in").trim().split("\n");

// Part 1: Original length vs in-memory length
const parsedInput = eval(`[${input.join(",")}]`);

const codeCharCount = input.reduce((sum, line) => sum + line.length, 0);
const memoryCharCount = parsedInput.reduce((sum, line) => sum + line.length, 0);

console.log("Part 1:", codeCharCount - memoryCharCount);

// Part 2: Encode each string and compare lengths
const encodedCharCount = input.reduce((sum, line) => {
  const encoded = `"${line.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
  return sum + encoded.length;
}, 0);

console.log("Part 2:", encodedCharCount - codeCharCount);
