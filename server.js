// server.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const route = require('./routes/index');

app.use('/', route);

const port = 8000;
app.listen(port, () => {
	console.log('We are live on ' + port);
});