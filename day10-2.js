var fs = require("fs");
var text = fs.readFileSync("./input/input-day10.txt", "utf-8");
var textByLine = text.split("\n");
var numbers = textByLine.map(Number)
numbers.push(0)
const sortedNumbers = numbers.sort((a, b) => a - b);

console.log(sortedNumbers)

var solution = [1]
for(i=1; i<=Math.max(...sortedNumbers)+1; i++) {
    console.log("hey")
    solution.push(0)
}

console.log(solution)
console.log(sortedNumbers[1]-2)

for (i=1; i< sortedNumbers.length; i++){

    solution[sortedNumbers[i]] = 0
    if (sortedNumbers.includes(sortedNumbers[i]-1)){
        solution[sortedNumbers[i]] += solution[sortedNumbers[i]-1]
    }
     if (sortedNumbers.includes(sortedNumbers[i]-2)){
         solution[sortedNumbers[i]] += solution[sortedNumbers[i]-2]
     }
     if (sortedNumbers.includes(sortedNumbers[i]-3)){
         solution[sortedNumbers[i]] += solution[sortedNumbers[i]-3]
    }
}

console.log(solution[148])