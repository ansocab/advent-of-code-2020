var fs = require("fs");
var text = fs.readFileSync("./input/input-day12.txt", "utf-8");
var instructions = text.split("\n");

const directions = ["north", "east", "south", "west"];
let east = 0;
let north = 0;
let facing = "east";

instructions.map((instruction) => {
  const action = instruction.slice(0, 1);
  const value = Number(instruction.slice(1));

  let directionIndex = directions.indexOf(facing);
  switch (action) {
    case "N":
      north += value;
      break;
    case "E":
      east += value;
      break;
    case "S":
      north -= value;
      break;
    case "W":
      east -= value;
      break;
    case "F":
      switch (directionIndex) {
        case 0:
          north += value;
          break;
        case 1:
          east += value;
          break;
        case 2:
          north -= value;
          break;
        case 3:
          east -= value;
          break;
        default:
          break;
      }
    default:
      break;
  }

  if (instruction === "R90" || instruction === "L270") {
    directionIndex = (directionIndex + 1) % 4;
  } else if (instruction === "R180" || instruction === "L180") {
    directionIndex = (directionIndex + 2) % 4;
  } else if (instruction === "R270" || instruction === "L90") {
    directionIndex = (directionIndex + 3) % 4;
  }
  facing = directions[directionIndex];
});

console.log("Manhattan distance: " + Math.abs(east) + Math.abs(north));
