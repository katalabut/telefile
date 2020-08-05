const express = require('express')
const router = require("./routes/static");
const app = express();

app.use(router)

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`Listening on port ${port}!`);
});
