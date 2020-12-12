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
  counter += checkTopLeft("#", row, col)
  counter += checkTop("#", row, col)
  counter += checkTopRight("#", row, col)
  counter += checkRight("#", row, col)
  counter += checkBottomRight("#", row, col)
  counter += checkBottom("#", row, col)
  counter += checkBottomLeft("#", row, col)
  counter += checkLeft("#", row, col)

  switch (value){
    case "L":
    if (counter === 0){
      tempMatrix[row][col] = "#"
      numberOfChanges++
    }
    break
    case "#":
    if (counter > 3){
      tempMatrix[row][col] = "L"
      numberOfChanges++
    }
    break
    default:
    break;
  }
}

function checkTopLeft(value, row, col){
  let result = 0
  if(row !== 0 && col !== 0){
    if(matrix[row-1][col-1] === value){
      result =  1
    }
  }
  return result
}

function checkTop(value, row, col){
  let result = 0
  if(row !== 0 ){
    if(matrix[row-1][col] === value){
      result =  1
    }
  }
  return result
}

function checkTopRight(value, row, col){
  let result = 0
  if(row !== 0 && col !== matrix[0].length-1){
    if(matrix[row-1][col+1] === value){
      result =  1
    }
  }
  return result
}

function checkRight(value, row, col){
  let result = 0
  if(col !== matrix[0].length-1){
    if(matrix[row][col+1] === value){
      result =  1
    }
  }
  return result
}

function checkBottomRight(value, row, col){
  let result = 0
  if(row !== vector.length-1 && col !== matrix[0].length-1){
    if(matrix[row+1][col+1] === value){
      result =  1
    }
  }
  return result
}

function checkBottom(value, row, col){
  let result = 0
  if(row !== vector.length-1){
    if(matrix[row+1][col] === value){
      result =  1
    }
  }
  return result
}

function checkBottomLeft(value, row, col){
  let result = 0
  if(row !== vector.length-1 && col !== 0){
    if(matrix[row+1][col-1] === value){
      result =  1
    }
  }
  return result
}

function checkLeft(value, row, col){
  let result = 0
  if(col !== 0){
    if(matrix[row][col-1] === value){
      result =  1
    }
  }
  return result
}
