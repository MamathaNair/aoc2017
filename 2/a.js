
var fs = require('fs')

fs.readFile(__dirname + '/aInput', 'utf8', function (err, data) {
  if (err) {
    console.log(err)
  }
  //console.log(data)
  var lines = data.split(':')
  var sum = 0
  lines.forEach(function (line) {
    var cols = line.split(',').map(function (item) {
      return parseInt(item, 10);
    });
    console.log(cols)
    var filtered = cols.filter(Boolean)
    if (filtered.length > 0) {
      var max = filtered.reduce(function (a, b) {
        return Math.max(a, b);
      });
      var min = filtered.reduce(function (a, b) {
        return Math.min(a, b);
      });
      sum+= max - min
    }
  })
  console.log(sum)
})