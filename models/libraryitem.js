// setup Mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var findOrCreate = require('mongoose-findorcreate');

var libraryItemSchema = new Schema({
    url: {type: String, index: true, unique: true},
    itemtype: String,
    created: {type: Date, default: Date.now}
});

// ensure schemas use virtual IDs
libraryItemSchema.set('toJSON', {
    virtuals: true
});

// add findorCreate
libraryItemSchema.plugin(findOrCreate);

// create library item
var LibraryItem = mongoose.model('libraryitem', libraryItemSchema);

module.exports = LibraryItem;