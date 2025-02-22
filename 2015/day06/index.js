const readFile = require("../../utils/readFile");

const input = readFile("2015/day06/input.in").trim().split("\n");

const gridPart1 = Array.from({ length: 1000 }, () => Array(1000).fill(false));
const gridPart2 = Array.from({ length: 1000 }, () => Array(1000).fill(0));

function processInstruction(instruction) {
    const regex = /(turn on|turn off|toggle) (\d+),(\d+) through (\d+),(\d+)/;
    const [, action, x1, y1, x2, y2] = instruction.match(regex);

    const startX = parseInt(x1, 10);
    const startY = parseInt(y1, 10);
    const endX = parseInt(x2, 10);
    const endY = parseInt(y2, 10);

    for (let x = startX; x <= endX; x++) {
        for (let y = startY; y <= endY; y++) {
            if (action === "turn on") {
                gridPart1[x][y] = true;
                gridPart2[x][y] += 1;
            } else if (action === "turn off") {
                gridPart1[x][y] = false;
                gridPart2[x][y] = Math.max(0, gridPart2[x][y] - 1);
            } else if (action === "toggle") {
                gridPart1[x][y] = !gridPart1[x][y];
                gridPart2[x][y] += 2;
            }
        }
    }
}

input.forEach(processInstruction);

const lightsOn = gridPart1.flat().filter(state => state).length;
const totalBrightness = gridPart2.flat().reduce((sum, brightness) => sum + brightness, 0);

console.log("Part 1:", lightsOn);
console.log("Part 2:", totalBrightness);
