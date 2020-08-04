const express = require('express')
const telegram = require('./telegram')
const app = express();

app.get('/', function (req, res) {
  const stream = telegram.getFile(req.params.id);
  stream.pipe(res)
});

const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
