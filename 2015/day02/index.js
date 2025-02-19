const readFile = require("../../utils/readFile");

const input = readFile("2015/day02/input.in").trim();

const calculateWrappingPaper = (input) => {
  const lines = input.split("\n");
  let totalPaper = 0

  for (const line of lines) {
    const [l, w, h] = line.split("x").map(Number);
    
    const lw = l * w;
    const wh = w * h;
    const hl = h * l;

    const surfaceArea = 2 * (lw + wh + hl);

    const smallestSide = Math.min(lw, wh, hl);
    
    totalPaper += surfaceArea + smallestSide;
  }

  return totalPaper;
}

const calculateRibbon = (input) => {
  const lines = input.split("\n");
  let totalRibbon = 0;

  for (const line of lines) {
    const [l, w, h] = line.split("x").map(Number);
    
    const smallestSides = 2 * (l + w + h - Math.max(l, w, h));
    const bow = l * w * h

    totalRibbon += smallestSides + bow;
  }
  
  return totalRibbon;
}

const mode = process.argv[2] || "paper"; // Pass "ribbon" as an argument to switch
if (mode === "ribbon") {
  console.log("Total ribbon needed:", calculateRibbon(input));
} else {
  console.log("Total wrapping paper needed:", calculateWrappingPaper(input));
}
