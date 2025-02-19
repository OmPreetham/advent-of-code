const readFile = require("../../utils/readFile");

const input = readFile("2015/day01/input.in").trim();

const findFinalFloor = (input) => {
  return input.split("").reduce((floor, char) => (char === "(" ? floor + 1 : floor - 1), 0);
};

const findFirstBasementPosition = (input) => {
  let floor = 0;
  for (let i = 0; i < input.length; i++) {
    floor += input[i] === "(" ? 1 : -1;
    if (floor === -1) return i + 1;
  }
  return -1;
};

const finalFloor = findFinalFloor(input);
const firstBasementPosition = findFirstBasementPosition(input);

console.log("Final Floor:", finalFloor);
console.log("First Basement Position:", firstBasementPosition);
