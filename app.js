const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);
const PORT = 8000;
const chatServer = require('./chatServer');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

http.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
