var fs = require("fs");
var string = fs.readFileSync("./input/input-day06.txt", "utf-8");
var answers = string.split("\n\n");

let totalAnswer = 0;

for (i = 0; i < answers.length; i++) {
  const answer = answers[i];
  const splittedAnswer = answer.split("\n");
  let lettersArray = [];
  splittedAnswer.map((person) => {
    person.split("").map((char) => {
      if (!lettersArray.includes(char)) {
        lettersArray.push(char);
      }
    });
  });
  totalAnswer = totalAnswer + lettersArray.length;
}

console.log(`Total number of "yes": ${totalAnswer}`);
