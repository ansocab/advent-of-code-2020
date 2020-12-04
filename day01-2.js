var fs = require("fs");
var text = fs.readFileSync("./input/input-day01.txt", "utf-8");
var textByLine = text.split("\n");
var numbers = textByLine.map(Number);

for (i = 0; i < numbers.length - 1; i++) {
  for (j = i + 1; j <= numbers.length - 1; j++) {
    for (k = j + 1; k <= numbers.length; k++) {
      if (numbers[i] + numbers[j] + numbers[k] === 2020) {
        console.log(
          `Numbers are: ${numbers[i]}, ${numbers[j]} and ${numbers[k]}`
        );
        const product = numbers[i] * numbers[j] * numbers[k];
        console.log(`Product: ${product}`);
        break;
      }
    }
  }
}
