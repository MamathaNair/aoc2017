var movement = { right: 0, up: 1, left: 2, down: 3 }

function changeDirection(currentDirection) {
  switch (currentDirection) {
    case movement.right: return movement.up
    case movement.up: return movement.left
    case movement.left: return movement.down
    case movement.down: return movement.right
  }
}

function getNextPosition(currentPos, direction) {
  switch (direction) {
    case movement.right:
      currentPos.x++;
      break;
    case movement.up:
      currentPos.y++;
      break;
    case movement.left:
      currentPos.x--;
      break;
    case movement.down:
      currentPos.y--;
      break;
  }
  return currentPos
}

var valPosMap = []

function getFirstValGreaterThan(input) {
  var currentPos = { x: 0, y: 0 }
  var nextMove = movement.right
  var steps = 1
  var radius = 1
  var count = 1
  valPosMap[0]= []
  valPosMap[1]=[]
  valPosMap[0][0] = 1
  valPosMap[1][0] = 1
  for (var i = 1; i <= 10000; i++) {
    currentPos = getNextPosition(currentPos, nextMove)
    if (steps >= radius) {
      nextMove = changeDirection(nextMove)
      steps = 1
      if (count == 2) {
        radius++
        count = 1
      } else {
        count++
      }
    } else {
      steps++
    }

    function getAdjacent(xVal, yVal) {       
      if (valPosMap[xVal]) {
        return valPosMap[xVal][yVal]
      }
    }
    var adjacents = [
      getAdjacent(currentPos.x - 1, currentPos.y),
      getAdjacent(currentPos.x + 1, currentPos.y),
      getAdjacent(currentPos.x, (currentPos.y - 1)),
      getAdjacent(currentPos.x, (currentPos.y + 1)),
      getAdjacent(currentPos.x - 1, (currentPos.y - 1)),
      getAdjacent(currentPos.x + 1, (currentPos.y - 1)),
      getAdjacent(currentPos.x + 1, (currentPos.y + 1)),
      getAdjacent(currentPos.x - 1, (currentPos.y + 1))
    ]
    var sum = 0
    for (var j = 0; j < adjacents.length; j++) {
      if (adjacents[j] !== undefined) {
        sum += adjacents[j]
      }
    }
    if (sum === 0) {
      sum = i
    }
    if (!valPosMap[currentPos.x]) {
      valPosMap[currentPos.x] = []
    }
    valPosMap[currentPos.x][currentPos.y] = sum
    if (sum > input) {
      console.log('Value at '+currentPos.x+','+currentPos.y+' is '+sum)
      break;
    }
  }
}

getFirstValGreaterThan(347991)

