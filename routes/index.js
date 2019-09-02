// routes/index.js

require('dotenv').config()
const express = require('express');
const router = express.Router();
const axios = require('axios');
const querystring = require('querystring');

router.post('/send', function (req, res, next) {
	axios.post(process.env.URL, querystring.stringify({
			From: process.env.FROM,
			To: process.env.TO,
			Body: process.env.BODY,
		}), {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
			},
			// withCredentials: true,
			auth: {
				username: process.env.USER_NAME,
				password: process.env.PASS_WORD
			},
			// responseType: 'json'
	})
	.then((response) => {
		console.log(typeof(response));
		// res.send(JSON.stringify(response));
		// res.json(response);
	})
	.catch((error) => {
		console.error(error);
	});
});

module.exports = router;