// setup Mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var findOrCreate = require('mongoose-findorcreate');

var libraryItemSchema = new Schema(
    {
        url: {type: String, index: true, unique: true},
        itemtype: String,
    }
);

// create library item
var LibraryItem = mongoose.model('users', libraryItemSchema);

module.exports = LibraryItem;