const express = require('express');
const cors = require('cors');
const app = express();
const api = require('./api');
require('dotenv').config();
const PORT = process.env.PORT || 4000;
const TOKEN = 'abcdefg';

const check = (req, res, next) => {
	const { query: { token } } = req;
	try {
		if (token !== TOKEN) {
			throw false;
		} else {
			next();
		}
	} catch {
		res.send('유효하지 않은 접근입니다.');
	}
};

app.use(express.json());

app.use(cors({
	origin: ['http://localhost:3000'],
	credentials: true,
}));

app.use('/api', api);

app.get('/', (req, res) => {
	res.send('<h1>Hello</h1>');
});

app.get('/nicetomeetyou', (req, res) => {
	res.send('<h1>thank you and you?</h1>');
});

app.get('/getData', (req, res) => {
	res.send({data: 123});
});

app.get('/hello/:name', (req, res) => {
	const { params: { name } } = req;
	res.send(name);
});

app.get('/hi', check, (req, res) => {
	const { query: { name, price } } = req;
	res.send(`${name}이고 가격은 ${price}`);
});

app.get('*', (req, res) => {
	// res.send('<h1>Redirect</h1>');
	res.redirect('http://localhost:4000/nicetomeetyou');
});


app.listen(PORT, () => {
	console.log(`Start Express Server. Port Number : ${PORT}`);
});