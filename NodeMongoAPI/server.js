var express    = require('express');        
var app        = express();                 
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongoURL = process.env.MONGO_URL || 'mongodb://host.docker.internal:27017/todos'

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes.js');
app.use('/', routes);

console.log('connecting to database');
mongoose.connect(mongoURL, { useNewUrlParser: true,  useUnifiedTopology: true })
const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:', mongoURL)
  app.listen(port);
  console.log('server started on port ' + port);
})

db.on('error', err => {
  console.error('Database connection error:', err)
})

var port = process.env.PORT || 3000;