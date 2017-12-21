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


function getAbsDistance(input) {
  var currentPos = { x: 0, y: 0 }
  var nextMove = movement.right
  var steps = 1
  var radius = 1 //max movement in a direction
  var count = 1
  if(input === 1){
    return 0
  }
  for (var i = 2; i <= input; i++) {
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
  }
  var absDist = Math.abs(currentPos.x) + Math.abs(currentPos.y)
  console.log('Abs distance for ' + input + ' is: ' + absDist)
}

getAbsDistance(12)
getAbsDistance(23)
getAbsDistance(1024)
getAbsDistance(347991)
