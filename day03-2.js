const fs = require('fs')
const input = fs.readFileSync('./input/input-day03.txt', 'utf-8')
const forest = input.split("\n");

const width = forest[0].length;

let index = {
    one: 0,
    three: 0,
    five: 0,
    seven: 0
};

let trees = {
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0
};

for(i=1; i<forest.length; i++) {
    index.one++;
    index.three = index.three + 3;
    index.five = index.five + 5;
    index.seven = index.seven + 7;

    if(forest[i][index.one%width] === "#") {
        trees.one++
    }

    if(forest[i][index.three%width] === "#") {
        trees.two++
    }

    if(forest[i][index.five%width] === "#") {
        trees.three++
    }

    if(forest[i][index.seven%width] === "#") {
        trees.four++
    }

    if(i%2 === 0) {
        if(forest[i][index.one%width] === "#") {
            trees.five++
        }
    }
}

const totalTrees = trees.one * trees.two * trees.three * trees.four * trees.five

console.log(`Product of trees on the path: ${totalTrees}`);