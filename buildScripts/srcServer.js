const express = require('express');
const path = require('path');
const open = require('open');

const port = 3000;
let app = new express();

app.get('/', function (req, res) {

	res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function (error) {
	if (error)
		console.log(error);

	console.log('listen to ', port);
	let serverUrl = 'http://localhost:' + port;
	let browser = 'chrome';
	console.log(`opening ${serverUrl} in ${browser}`);
	open(serverUrl, browser);
});
