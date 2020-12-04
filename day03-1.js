const fs = require('fs')
const input = fs.readFileSync('./input/input-day03.txt', 'utf-8')
const forest = input.split("\n");

const width = forest[0].length;
let trees = 0;
let index = 0

for(i=1; i<forest.length; i++) {
    index = index + 3;
    if(forest[i][index%width] === "#") {
        trees++
    }
}

console.log(`Trees on the path: ${trees}`);