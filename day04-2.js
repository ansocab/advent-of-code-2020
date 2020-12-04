var fs = require("fs");
var string = fs.readFileSync("./input/input-day04.txt", "utf-8");
var passports = string.split("\n\n");

let validPassports = 0;

function inBetween(number, min, max) {
  if (number <= max && number >= min) {
    return true;
  } else {
    return false;
  }
}

function checkInfo(info) {
  const field = info.split(":")[0];
  const fieldValue = info.split(":")[1];
  switch (field) {
    case "byr":
      return inBetween(Number(fieldValue), 1920, 2002);

    case "iyr":
      return inBetween(Number(fieldValue), 2010, 2020);

    case "eyr":
      return inBetween(Number(fieldValue), 2020, 2030);

    case "hgt":
      if (
        (fieldValue.slice(-2) === "cm" &&
          inBetween(Number(fieldValue.slice(0, 3)), 150, 193)) ||
        (fieldValue.slice(-2) === "in" &&
          inBetween(Number(fieldValue.slice(0, 2)), 59, 76))
      ) {
        return true;
      } else {
        return false;
      }

    case "hcl":
      return /^#[0-9A-F]{6}$/i.test(fieldValue);

    case "ecl":
      const validEcl = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
      return validEcl.includes(fieldValue);

    case "pid":
      return /^[0-9]{9}$/i.test(fieldValue);

    default:
      return true;
  }
}

for (i = 0; i < passports.length; i++) {
  const helperPassport = passports[i].split("\n");
  let passport = [];
  helperPassport.map((string) => {
    if (string.includes(" ")) {
      const stringArray = string.split(" ");
      stringArray.map((element) => passport.push(element));
    } else {
      passport.push(string);
    }
  });

  if (
    passport.length === 8 ||
    (passport.length === 7 && !passport.some((item) => item.includes("cid")))
  ) {
    let valid = true;

    passport.forEach((info) => {
      if (!checkInfo(info)) {
        valid = false;
      }
    });

    if (valid) {
      validPassports++;
    }
  }
}

console.log(`Total of valid passports: ${validPassports}`)