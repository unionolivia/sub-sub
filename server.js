const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

const app = express();

// Serve static files....
app.use('/', serveStatic(path.join(__dirname + '/dist')));

const port = process.env.PORT || 8089;

app.listen(port);

console.log('Listening on port: '+ port);
