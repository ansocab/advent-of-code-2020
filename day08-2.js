var fs = require("fs");
var string = fs.readFileSync("./input/input-day08.txt", "utf-8");
var instructionsRaw = string.split("\n");

let instructions = [];
let run = true;
let runOuter = true;
// let visitedIndex = [];
// let index = 0;
let correctionIndex = 0;
let accumulator = 0;

instructionsRaw.map((instr) => {
  const operation = instr.split(" ")[0];
  const argument = instr.split(" ")[1];
  instructions.push([operation, argument]);
});

// const swapOperation = (i, inst) => {
//   inst[i] === "jmp" ? inst[i][0] = "nop" : inst[i][0] = "jmp";
// }

const runInstructions = (instr) => {
  accumulator = 0;
  run = true;
  let index = 0;
  let visitedIndex = [];

  do {
    if (index >= instr.length) {
      run = false;
      runOuter = false;
      break;
    }

    if (visitedIndex.includes(index)) {
      run = false;
    } else {
      visitedIndex.push(index);
    }

    const operation = instr[index][0];
    const argument = parseInt(instr[index][1]);

    switch (operation) {
      case "acc":
        accumulator += argument;
        index++;
        break;
      case "jmp":
        index += argument;
        break;
      case "nop":
        index++;
        break;
      default:
        break;
    }
  } while (run);
};

do {
  const operation = instructions[correctionIndex][0];
  const argument = parseInt(instructions[correctionIndex][1]);

  switch (operation) {
    case "acc":
      correctionIndex++;
      break;
    case "jmp":
      instructions[correctionIndex][0] = "nop";
      runInstructions(instructions);
      instructions[correctionIndex][0] = "jmp";
      correctionIndex += argument;
      break;
    case "nop":
      instructions[correctionIndex][0] = "jmp";
      runInstructions(instructions);
      instructions[correctionIndex][0] = "nop";
      correctionIndex++;
      break;
    default:
      break;
  }
} while (runOuter);

console.log(accumulator);
