// setup Mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var findOrCreate = require('mongoose-findorcreate');

//var User = require('./user.js');

var libraryItemSchema = new Schema({
    url: {type: String, index: true, unique: true},
    title: String,
    description: String,
    authors: [ String ],
    type: String,
    tags: [ String ],
    submitted: {type: ObjectId, ref: 'users'},
    users: [ {type: ObjectId, ref: 'users'} ],
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