const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');

//const index = require('./server/routes/index');
//const tasks = require('./server/routes/tasks');
//const products = require('./server/routes/products');
const api = require('./server/routes/api');

var app = express();

// ejs ?
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');
//app.engine('html', require('ejs').renderFile);

// Static folder
app.use(express.static(path.join(__dirname, 'dist')));

// body parser mw
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// routes
//app.use('/', index);
//app.use('/api', tasks);
//app.use('/products', products);
app.use('/api', api);

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist/index.html'));
});


// Set port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

app.listen(port, () => {
	console.log(`Running on localhost:${port}`);
})