// setup Express
var app = require('./models/express.js');

// setup mongoose
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/readopenly');

// models
var api = require('./models/api.js');
var User = require('./models/user.js');
var Item = require('./models/item.js');
var LibraryItem = require('./models/libraryitem.js');

// start the server
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Started server: http://" + host + ":" + port);
});