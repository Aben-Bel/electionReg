const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const db = require('./database/db.js');
const routes = require('./database/routes.js');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
const port = process.env.PORT || 3000;
const router = express.Router();

const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({extended:true});;

db();

// configure app.use()
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);
app.use('/api',router);
routes(router);

const account = {username:'admin', password:'admin'};

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.post('/auth', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
		if (username === account.username && password === account.password) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('/authPass');
			} else {
				response.redirect('/login');
			}			
			response.end();
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});
app.get('/authPass', function(request, response) {
	if (request.session.loggedin) {
    console.log('they can login');
		response.sendFile(path.join(__dirname, '/View/legibility.html'));
	} else {
		response.send('Please login to view this page!');
	}
});


app.get('/login', (req, res)=>{
  res.sendFile(path.join(__dirname, '/View/login.html'))
});

app.get('/login/pass')

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/View/home.html'));
});
app.get('/nav/status.html', (req, res)=>{
  res.sendFile(path.join(__dirname, '/View/status.html'));
});

app.get('/nav/registration.html', (req, res)=>{
  res.sendFile(path.join(__dirname, '/View/Registration.html'));
});

app.use('/style',express.static(path.join(__dirname, '/View')));
app.use('/nav/style', express.static(path.join(__dirname, '/View')));
app.use('/script', express.static(path.join(__dirname, '/View')));
app.use('/lib',express.static(path.join(__dirname, '/lib')));

app.listen(port, () => {
  console.log(`Example app listening on port ${port} !`)
});