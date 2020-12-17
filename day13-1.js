const { time } = require("console");
const fs = require("fs");
const notes = fs.readFileSync("./input/input-day13.txt", "utf-8");

const timestamp = Number(notes.split("\n")[0]);
const tempBusIds = notes.split("\n")[1].split(",");
let busIds = [];

tempBusIds.forEach((id) => {
  if (id !== "x") {
    busIds.push(Number(id));
  }
});

let min = busIds[0];
let nextBus;

busIds.map((id) => {
  const waitingTime = id - (timestamp % id);
  if (min > waitingTime) {
    min = waitingTime;
    nextBus = id;
  }
});

console.log(`Waiting time multiplied by next bus id: ${min * nextBus}`);
