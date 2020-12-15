var fs = require("fs");
var text = fs.readFileSync("./input/input-day12.txt", "utf-8");
var instructions = text.split("\n");

const directions = ["north", "east", "south", "west"];
let east = 10;
let north = 1;
let shipEast = 0;
let shipNorth = 0;
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
      shipEast += east * value;
      shipNorth += north * value;
    default:
      break;
  }

  if (instruction === "R90" || instruction === "L270") {
    const temp = east;
    east = north;
    north = -temp;
  } else if (instruction === "R180" || instruction === "L180") {
    east = -east;
    north = -north;
  } else if (instruction === "R270" || instruction === "L90") {
    const temp = east;
    east = -north;
    north = temp;
  }
});

console.log("Manhattan distance: " + Math.abs(shipEast) + Math.abs(shipNorth));
