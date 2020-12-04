var fs = require("fs");
var text = fs.readFileSync("./input/input-day01.txt", "utf-8");
var textByLine = text.split("\n");
var numbers = textByLine.map(Number);

for (i = 0; i < numbers.length; i++) {
  for (j = i + 1; j <= numbers.length; j++) {
    if (numbers[i] + numbers[j] === 2020) {
      console.log(`Numbers are: ${numbers[i]}, ${numbers[j]}`);
      const product = numbers[i] * numbers[j];
      console.log(`Product: ${product}`);
      break;
    }
  }
}
