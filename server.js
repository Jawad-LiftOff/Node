// modules =================================================
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');

// configuration ===========================================
	
// config files
var dbconf = require('./config/db');

var port = process.env.PORT || 8080; // set our port
//mongoose.connect(db.url); // connect to our mongoDB database (commented out after you enter in your own credentials)

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

// routes ==================================================
require('./app/routes')(app); // pass our application into our routes

// start app ===============================================
// app.listen(port);	
// console.log('Magic happens on port ' + port); 			// shoutout to the user

// Connect to MongoDB

var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function () {
	app.models = require('./app/models/index');
	var routes = require('./routes');
	console.log(routes);
  _.each(routes, function (controller, route) {
    app.use(route, controller(app, route));
	});

  app.listen(port);
  console.log('Magic happens on port ' + port);
});

//mongoose.connect('mongodb://myapp-user:pass123@ds047762.mongolab.com:47762/myapp');
var url = process.env.NODE_ENV == 'production' ? dbconf.prourl : dbconf.localurl;
console.log(url);
mongoose.connect(url);



//var Custschema = require('./app/models/customer');
//
//var cust = new Custschema({
//  name: 'cust 2'
//});
//cust.save(function (err, data) {
//  console.dir(data);
//});

//var movieSchema = new mongoose.Schema({
//  title: { type: String }
//, rating: String
//, releaseYear: Number
//, hasCreditCookie: Boolean
//});
//
//// Compile a 'Movie' model using the movieSchema as the structure.
//// Mongoose also creates a MongoDB collection called 'Movies' for these documents.
//var Movie = mongoose.model('Movie', movieSchema);
//
//var thor = new Movie({
//  title: 'Thor'
//, rating: 'PG-13'
//, releaseYear: '2011'  // Notice the use of a String rather than a Number - Mongoose will automatically convert this for us.
//, hasCreditCookie: true
//});
//
//thor.save(function(err, thor) {
//  if (err) return console.error(err);
//  console.dir(thor);
//});

exports = module.exports = app; 						// expose app