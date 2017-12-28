var fs = require('fs')
var input = fs.readFileSync(__dirname + '/input', 'utf8')

function findRepetitions() {
  var inputblocks = input.split(/\s+/).map(block => parseInt(block))
  var currentblocks = inputblocks
  var maxIndex = currentblocks.length - 1
  var seen = [currentblocks.join(',')]
  var returnObj = {}
  while (true) {
    var max = currentblocks.reduce(function (a, b) {
      return Math.max(a, b);
    });
    var index = currentblocks.indexOf(max)
    //console.log('max is ' + max + ' index is ' + index + 'Length of blocks is : ' + currentblocks.length)
    var nextIndex = index
    for (var i = 0; i < max; i++) {
      nextIndex = nextIndex + 1 > maxIndex ? 0 : nextIndex + 1
      currentblocks[nextIndex]++
      currentblocks[index]--
    }
    var joinedBlocks = currentblocks.join(',')

    if (seen.indexOf(joinedBlocks) !== -1) {
      console.log(seen)
      returnObj = {
        totalCycles: seen.length,
        currentBlocks: currentblocks,
        firstIndex: seen.indexOf(joinedBlocks)
      }
      console.log(returnObj)
      return returnObj
    } else {
      seen.push(joinedBlocks)
    }
  }
}

module.exports = findRepetitions()