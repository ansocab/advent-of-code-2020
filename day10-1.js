var fs = require("fs");
var text = fs.readFileSync("./input/input-day10.txt", "utf-8");
var textByLine = text.split("\n");
var sortedNumbers = textByLine.map(Number).sort((a, b) => a - b);

console.log(sortedNumbers)

let differenceOne = 1;
let differenceThree = 1;

for(i=1; i<sortedNumbers.length; i++) {
    const difference = sortedNumbers[i] - sortedNumbers[i-1]
    if(difference === 1) {
        differenceOne++
    } else if(difference === 3) {
        differenceThree++
    }
}

console.log(`Result: ${differenceOne * differenceThree}`)