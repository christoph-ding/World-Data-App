var path = require('path');
var express = require('express');
var PORT = process.env.PORT || 8000;

// start the server
var app = express();
app.listen(PORT);
console.log("server listening on port " + PORT);

// serve static files

app.use(express.static(path.resolve(__dirname, 'dist')));

app.get('/', function(req, res) {
	res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
});
