var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('This Works !!!!!');
});
app.listen(3000, function () {
  console.log('BasicNodeApp listening on port 3000!');
});
