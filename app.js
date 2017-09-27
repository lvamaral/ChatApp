const express = require("express");
const app = express();

app.get('/', (req, res) => {
  res.send("Hello Worlds")
})


app.listen(3000, function () {
  console.log('App listening on port 3000!')
})
