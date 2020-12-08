var fs = require("fs");
var string = fs.readFileSync("./input/input-day08.txt", "utf-8");
var instructionsRaw = string.split("\n");

let instructions = [];
let run = true;
let index = 0;
let accumulator = 0;

instructionsRaw.map((instr) => {
  const operation = instr.split(" ")[0];
  const argument = instr.split(" ")[1];
  instructions.push([operation, argument]);
});

do {
  const operation = instructions[index][0];
  const argument = parseInt(instructions[index][1]);

  switch (operation) {
    case "acc":
      accumulator += argument;
      instructions[index][0] = "loop";
      index++;
      break;
    case "jmp":
      instructions[index][0] = "loop";
      index += argument;
      break;
    case "nop":
      instructions[index][0] = "loop";
      index++;
      break;
    case "loop":
      run = false;
      break;
    default:
      break;
  }
} while (run);

console.log(accumulator);
