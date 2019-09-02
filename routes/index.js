// routes/index.js

const express = require('express');
const router = express.Router();

router.post('/send', function (req, res, next) {
	res.send('Hello');
});

module.exports = router;