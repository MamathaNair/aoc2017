
var fs = require('fs')

fs.readFile(__dirname + '/aInput', 'utf8', function (err, data) {
  var lines = data.split(':')
  var sum = 0
  lines.forEach(function (line) {
    var cols = line.split(',').map(function (item) {
      return parseInt(item, 10);
    }).filter(Boolean);

    for (var i = 0; i < cols.length - 1; i++) {
      for (var j = 0; j < cols.length; j++) {
        if (i === j) {
          continue;
        }
        if (cols[i] % cols[j] === 0) {
          console.log(cols[i] + ' / ' + cols[j] + ' is a whole number')
          sum+= cols[i] / cols[j]
        }
      }
    }
  })
  console.log(sum)
})