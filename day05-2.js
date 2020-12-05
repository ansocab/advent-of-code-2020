const fs = require("fs");
const input = fs.readFileSync("./input/input-day05.txt", "utf-8");
const boardingPasses = input.split("\n");

const binaryPasses = boardingPasses.map((pass) =>
  pass.replace(/F/g, 0).replace(/B/g, 1).replace(/R/g, 1).replace(/L/g, 0)
);
const decimalPasses = binaryPasses.map((pass) => parseInt(pass, 2));
const max = Math.max(...decimalPasses)
const min = Math.min(...decimalPasses)
const actualSum = decimalPasses.reduce((accumulator, currentValue) => accumulator + currentValue)

const gaussSum = (max*(max+1)/2) - (min*(min-1)/2)
const missingPass = gaussSum - actualSum

console.log(missingPass);