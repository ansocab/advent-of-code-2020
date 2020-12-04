var fs = require("fs");
var text = fs.readFileSync("./input/input-day02.txt", "utf-8");
var textByLine = text.split("\n")

let validPasswords = 0

for(i=0; i<textByLine.length-1; i++) {
    const entry = textByLine[i];
    const rule = entry.split(":")[0];
    const password = entry.split(":")[1];
    const numbers = rule.split(" ")[0]
    const letter = rule.split(" ")[1]
    const first = Number(numbers.split("-")[0])
    const second = Number(numbers.split("-")[1])

    let count = 0

    if(password[first] === letter) {
        count++
    }

    if(password[second] === letter) {
        count++
    }

    if(count === 1) {
        validPasswords++
    }
}

console.log(`Total of valid passwords: ${validPasswords}`)