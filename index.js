const express = require('express');
const app = express();
const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/electionReg', { useNewUrlParser: true });
const data = require('./models/electionReg');

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});