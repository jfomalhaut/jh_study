const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('<h1>Hello</h1>');
});

app.listen(4000, () => {
	console.log('4000 PORT');
})