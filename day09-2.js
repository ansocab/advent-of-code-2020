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

const invalidNumber = numbers[index+24]

let startIndex = 0;
let endIndex = 1;
let sum
let notFound = true

do{
  sum = 0
  for (i = startIndex; i <= endIndex; i++){
    sum += numbers[i]
  }
  if(sum === invalidNumber){

    notFound = false
  }
  else if (sum < invalidNumber){
    endIndex++
  }
  else{
    startIndex++
  }
} while(notFound)

let finalArray = [];
for(i = startIndex; i<= endIndex; i++){
  finalArray.push(numbers[i])
}

console.log(`The numbers are: ${Math.min(...finalArray)} and ${Math.max(...finalArray)} and the sum is ${Math.min(...finalArray) + Math.max(...finalArray)} `);
