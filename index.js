const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const db = require('./database/db.js');
const routes = require('./database/routes.js');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
const router = express.Router();

const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({extended:true});

db();
// configure app.use()
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);


app.use('/api',router);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/View/index.html'));
});

app.use('/style', express.static(path.join(__dirname, '/View')));

routes(router);


app.listen(port, () => {
  console.log(`Example app listening on port ${port} !`)
});