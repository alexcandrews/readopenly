var $ = require("jquery");

// API object
var api = {
    // get the list of items, call the callback when complete
    getItems: function (cb) {
        var url = "/api/items";
        $.ajax({
            url: url,
            dataType: 'json',
            type: 'GET',
            headers: {'Authorization': localStorage.token},
            success: function (res) {
                if (cb)
                    cb(true, res);
            },
            error: function (xhr, status, err) {
                // if there is an error, remove the login token
                delete localStorage.token;
                if (cb)
                    cb(false, status);
            }
        });
    },
    // add an item, call the callback when complete
    addItem: function (title, cb) {
        var url = "/api/items";
        $.ajax({
            url: url,
            contentType: 'application/json',
            data: JSON.stringify({
                item: {
                    'title': title
                }
            }),
            type: 'POST',
            headers: {'Authorization': localStorage.token},
            success: function (res) {
                if (cb)
                    cb(true, res);
            },
            error: function (xhr, status, err) {
                // if there is an error, remove the login token
                delete localStorage.token;
                if (cb)
                    cb(false, status);
            }
        });

    },

    submitLibraryItem: function (title, location, description, category, authors, tags, cb) {
        var url = "/api/libraryitems";
        $.ajax({
            url: url,
            contentType: 'application/json',
            data: JSON.stringify({
                libraryitem: {
                    'title': title,
                    'location': location,
                    'description': description,
                    'authors': authors,
                    'category': category,
                    'tags': tags
                }
            }),
            type: 'POST',
            headers: {'Authorization': localStorage.token},
            success: function (res) {
                if (cb)
                    cb(true, res);
            },
            error: function (xhr, status, err) {
                // if there is an error, remove the login token
                delete localStorage.token;
                if (cb)
                    cb(false, status);
            }
        });

    },

    //searchLibraryItems: function (cb) {
    //    var url = "/api/libraryitems/search";
    //    $.ajax({
    //        url: url,
    //        dataType: 'json',
    //        type: 'GET',
    //        headers: {'Authorization': localStorage.token},
    //        success: function (res) {
    //            if (cb)
    //                cb(true, res);
    //        },
    //        error: function (xhr, status, err) {
    //            // if there is an error, remove the login token
    //            delete localStorage.token;
    //            if (cb)
    //                cb(false, status);
    //        }
    //    });
    //},

    getLibraryItems: function (cb) {
        var url = "/api/libraryitems";
        $.ajax({
            url: url,
            dataType: 'json',
            type: 'GET',
            headers: {'Authorization': localStorage.token},
            success: function (res) {
                if (cb)
                    cb(true, res);
            },
            error: function (xhr, status, err) {
                // if there is an error, remove the login token
                delete localStorage.token;
                if (cb)
                    cb(false, status);
            }
        });
    },

    // update an item, call the callback when complete
    updateItem: function (item, cb) {
        var url = "/api/items/" + item.id;
        $.ajax({
            url: url,
            contentType: 'application/json',
            data: JSON.stringify({
                item: {
                    title: item.title,
                    completed: item.completed
                }
            }),
            type: 'PUT',
            headers: {'Authorization': localStorage.token},
            success: function (res) {
                if (cb)
                    cb(true, res);
            },
            error: function (xhr, status, err) {
                // if there is any error, remove any login token
                delete localStorage.token;
                if (cb)
                    cb(false, status);
            }
        });
    },
    // delete an item, call the callback when complete
    deleteItem: function (item, cb) {
        var url = "/api/items/" + item.id;
        $.ajax({
            url: url,
            type: 'DELETE',
            headers: {'Authorization': localStorage.token},
            success: function (res) {
                if (cb)
                    cb(true, res);
            },
            error: function (xhr, status, err) {
                // if there is an error, remove any login token
                delete localStorage.token;
                if (cb)
                    cb(false, status);
            }
        });
    }

};

module.exports = api;
