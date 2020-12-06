var fs = require("fs");
var string = fs.readFileSync("./input/input-day06.txt", "utf-8");
var answers = string.split("\n\n");

let totalAnswer = 0;

for (i = 0; i < answers.length; i++) {
  const answer = answers[i];
  const splittedAnswer = answer.split("\n");

  let filteredArray = splittedAnswer[0].split("");

  splittedAnswer.map((person) => {
    personArray = person.split("");
    filteredArray = filteredArray.filter((value) =>
      personArray.includes(value)
    );
  });

  totalAnswer = totalAnswer + filteredArray.length;
}

console.log(`Total number of shared "yes": ${totalAnswer}`);
