var fs = require("fs")
var string = fs.readFileSync("./input/input-day04.txt", "utf-8")
var passports = string.split("\n\n")

let validPassports = 0

for(i=0; i<passports.length; i++) {
    const currentPassport = passports[i]
    const helperPassport = currentPassport.split(":")
    helperPassport.pop()
    const passportInfo = helperPassport.map(item => item.slice(-3))
    
    if(passportInfo.length === 8 || (passportInfo.length === 7 && !passportInfo.includes("cid"))) {
        validPassports++
    }
}

console.log(`Total of valid passports: ${validPassports}`)