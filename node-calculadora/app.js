const express = require('express');
const app = express();
const PORT = 3000;
const colors = require('colors');
const path = require('path');

app.use(express.urlencoded({extended: false}))

// method GET
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'templates/form.html'));
});
// method POST
app.post('/post-input', (req, res) => {
	let operators = ['-', '+', '*', '/'];
	let number_a = parseInt(req.body.number_one);
	let number_b = parseInt(req.body.number_two);
	let operator = req.body.operator;

	function suma(a, b) {
		let opt = operator.trim()
		if (operators.includes(opt) && opt === '+') {
			return a + b
		};
	};

	function rest(a, b) {
		let opt = operator.trim()
		if (operators.includes(opt) && opt === '-') {
			return a - b
		};
	};

	function mult(a, b) {
		let opt = operator.trim()
		if (operators.includes(opt) && opt === '*') {
			return a * b
		};
	};

	function divi(a, b) {
		let opt = operator.trim()
		if (operators.includes(opt) && opt === '/') {
			if (b == 0) {
				return 0
			} else {
				return a / b
			};
		};
	};

	res.send(`
		<div style="color: purple; text-align: center;">
			<h1>Resultado</h1>
			<h2>${number_a} + ${number_b} = ${suma(number_a, number_b)}</h2>
			<h2>${number_a} - ${number_b} = ${rest(number_a, number_b)}</h2>
			<h2>${number_a} * ${number_b} = ${mult(number_a, number_b)}</h2>
			<h2>${number_a} / ${number_b} = ${divi(number_a, number_b)}</h2>
		</div>
	`);
});
// end POST

app.listen(PORT, (req, res) => {
	
	console.log(`Server on port: ${PORT}`.yellow);
});
