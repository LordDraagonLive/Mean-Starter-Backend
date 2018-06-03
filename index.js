const express = require('express');
const bodyParser = require('body-parser');
// A middleware pkg whcih allows restricted resources (e.g. fonts) on a 
// web page to be requested from another domain outside the domain from which the first resource was served.
// CORS => Cross-origin resource sharing
const cors = require('cors');

const { mongoose } = require('./db.js');
var employeeCtrl = require('./controllers/employeeCtrl.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200'}));

app.listen(3000,() => console.log('Server started at port : 3000'));

// this will call like this 
// as there are know other url extentions for the url
// the final url will look like this => localhost:3000/employees/
app.use('/employees',employeeCtrl);