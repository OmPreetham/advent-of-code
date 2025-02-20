const readFile = require("../../utils/readFile");

const input = readFile("2015/day03/input.in").trim();

const santaHouseDelivery = (input) => {
  let x = 0, y = 0;
  let visited = new Set();
  visited.add(`${x},${y}`);

  for (let move of input) {
    if (move === "^") y++;
    else if (move === "v") y--;
    else if (move === ">") x++;
    else if (move === "<") x--;

    visited.add(`${x},${y}`);
  }

  return visited.size;
}

const santaRoboDelivery = (input) => {
  let xS = 0, yS = 0, xR = 0, yR = 0;
  let visited = new Set();
  visited.add(`${xS},${yS}`);

  for (let i = 0; i < input.length; i++) {
    let move = input[i];
    let isSantaTurn = i % 2 === 0;
    let [x, y] = isSantaTurn ? [xS, yS] : [xR, yR];

    if (move === "^") y++;
    else if (move === "v") y--;
    else if (move === ">") x++;
    else if (move === "<") x--;

    if (isSantaTurn) {
      xS = x; yS = y;
    } else {
      xR = x; yR = y;
    }

    visited.add(`${x},${y}`);
  }

  return visited.size;
}

console.log("Part 1:", santaHouseDelivery(input));
console.log("Part 2:", santaRoboDelivery(input));
