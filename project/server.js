const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/view'));
//
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/view/home.html'));
});

app.get('/detail', (req, res) => {
	res.sendFile(path.join(__dirname + '/view/detail.html'));
});

app.get('/control', (req, res) => {
	res.sendFile(path.join(__dirname + '/view/control.html'));
});

app.get('/about', (req, res) => {
	res.sendFile(path.join(__dirname + '/view/about.html'));
});

app.listen(3000, () => {
	console.log('Connection to PORT 3000!');
});
