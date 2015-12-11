// setup Mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var findOrCreate = require('mongoose-findorcreate');
var textSearch = require('mongoose-text-search');

var User = require('./user.js');

var libraryItemSchema = new Schema({
    title: String,
    location: { type: String, index: true, unique: true },
    description: String,
    authors: [ String ],
    category: String,
    tags: [ String ],
    submittedby: {type: ObjectId, ref: 'users'},
    users: [ {type: ObjectId, ref: 'users'} ],
    created: {type: Date, default: Date.now}
});

// ensure schemas use virtual IDs
libraryItemSchema.set('toJSON', {
    virtuals: true
});

// add findorCreate plugin
libraryItemSchema.plugin(findOrCreate);
// add textSearch plugin
//libraryItemSchema.plugin(textSearch);

// create library item
var LibraryItem = mongoose.model('libraryitem', libraryItemSchema);

module.exports = LibraryItem;