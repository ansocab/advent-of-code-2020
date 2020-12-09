var fs = require("fs");
var text = fs.readFileSync("./input/input-day09.txt", "utf-8");
var textByLine = text.split("\n");
var numbers = textByLine.map(Number);

let index = 0;
let sumPossible

do {
  sumPossible = false
  for (i = index; i < index+24; i++) {
    for (j = i + 1; j < index+25; j++) {
      if (numbers[i] + numbers[j] === numbers[index+25]) {
        sumPossible = true
      }
    }
  }
  index++
} while (sumPossible);

console.log(`The number is: ${numbers[index+24]}`);
