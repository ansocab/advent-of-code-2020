const fs = require("fs");
const notes = fs.readFileSync("./input/input-day13.txt", "utf-8");

const buses = notes
  .split("\n")[1]
  .split(",")
  .map((bus) => (bus === "x" ? 1 : Number(bus)));

let time = 0;
let stepSize = buses[0];

for (let i = 1; i < buses.length; i++) {
  const bus = buses[i];

  while ((time + i) % bus !== 0) {
    time += stepSize;
  }

  stepSize *= bus;
}

console.log(`Earliest timestamp: ${time}`);
