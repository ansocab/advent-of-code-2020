var fs = require("fs");
var text = fs.readFileSync("./input/input-day11.txt", "utf-8");
var vector = text.split("\n");
var matrix = []

for (i=0; i<vector.length; i++){
  matrix[i] = vector[i].split("");
}

let  tempMatrix = JSON.parse(JSON.stringify(matrix));
var stabilized = false
var numberOfChanges = 0
var numberOfOccupied = 0

while(!stabilized){
  numberOfChanges = 0
  for (i=0; i<vector.length; i++){
    for(j=0; j<matrix[0].length; j++){
      iterate(i,j)
    }
  }
  matrix = JSON.parse(JSON.stringify(tempMatrix));
  if (numberOfChanges === 0) {
    stabilized = true
  }
}

for (i=0; i<vector.length; i++){
  for(j=0; j<matrix[0].length; j++){
    if(matrix[i][j]=== "#"){
      numberOfOccupied++
    }
  }
}

console.log("Number of occupied seats: " + numberOfOccupied)

function iterate(row,col){
  const value = matrix[row][col]
  let counter = 0
  counter += checkBorder("#", row, col, -1, -1)
  counter += checkBorder("#", row, col, -1, 0)
  counter += checkBorder("#", row, col, -1, 1)
  counter += checkBorder("#", row, col, 0, 1)
  counter += checkBorder("#", row, col, 1, 1)
  counter += checkBorder("#", row, col, 1, 0)
  counter += checkBorder("#", row, col, 1, -1)
  counter += checkBorder("#", row, col, 0, -1)

  switch (value){
    case "L":
    if (counter === 0){
      tempMatrix[row][col] = "#"
      numberOfChanges++
    }
    break
    case "#":
    if (counter > 4){
      tempMatrix[row][col] = "L"
      numberOfChanges++
    }
    break
    default:
    break;
  }
}

function checkBorder(value, row, col, rowDir, colDir){
  let result = 0
  let rowBorder = setRowBorder(rowDir)
  let colBorder = setColBorder(colDir)
  if (row !== rowBorder && col !== colBorder){
    if(matrix[row + rowDir][col+colDir] === "."){
      row += rowDir
      col += colDir
      result = checkBorder(value, row, col, rowDir, colDir)
    }
    else if(matrix[row + rowDir][col+colDir] === value){
      result =  1
    }
  }
  return result
}

function setRowBorder(rowDir){
  if (rowDir === -1){
    return 0
  }
  else if (rowDir === 1){
    return vector.length-1
  } else{
    return -1
  }
}

function setColBorder(rowDir){
  if (rowDir === -1){
    return 0
  }
  else if (rowDir === 1){
    return matrix[0].length-1
  } else{
    return -1
  }
}
