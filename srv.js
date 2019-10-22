const express = require('express')
const app = express()
const port = 1000

app.get('/504', (req, res) => {
	console.log('504 server timeout responce  :)');
	res.status(504);
	res.send("504 server timeout ;)")
});

app.get('/500', (req, res) => {
	console.log('500 server error responce  :)');
	res.status(500);
	res.send("500 server error ;)")
});

app.get('/206', (req, res) => {
	console.log('206 partial data responce :)');
	res.status(206);
	res.send("206 partial responce ;)")
});

app.get('/404', (req, res) => {
	console.log('404 resoponce :)');
	res.status(404);
	res.send("404 not found ;)")
});

app.get('/', (req, res) => {
	console.log('Not responding ... ever ... making your caller to wait for ever :)');
});


app.listen(port, () => {
	console.log(`The ERROR server is listening on port ${port}!`);
});
