
var fs = require('fs')
var input = fs.readFileSync(__dirname + '/input', 'utf8')
var lines = input.split(/\r?\n/)
var count = 0
lines.forEach(line => {
  var words = line.split(' ')
  var seenWords = []
  var filtered = words.filter(word => {
    if (seenWords.indexOf(word) === -1) {
      seenWords.push(word)
      return true
    }
    return false
  });
  if (words.length === filtered.length) {
    count++
  }
});
console.log(count)
