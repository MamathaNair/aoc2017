var fs = require('fs')
var input = fs.readFileSync(__dirname + '/input', 'utf8')
var instructions = input.split(/\r?\n/)
var index = 0
var steps = 0
while (index < instructions.length) {
  var jumps = parseInt(instructions[index])
  steps += 1
  instructions[index] = jumps < 3 ? jumps + 1 : jumps - 1
  index = index + jumps
  if (index >= instructions.length) {
    console.log('Exiting yaaaay!! ' + steps)
    return
  }
}
