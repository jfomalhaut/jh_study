const express = require('express');
const router = express.Router();
require('dotenv').config();

const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;

router.post('/signin', (req, res) => {
	const { body: { username, password } } = req;
	console.log(username, password);
	console.log(USERNAME);
	console.log(PASSWORD);
	if (username === USERNAME && password === PASSWORD) {
		res.status(200).send(true);
	} else {
		res.status(400).send(false);
	}
});

router.get('/test', (req, res) => {
	res.send('Success Test');
});

module.exports = router;