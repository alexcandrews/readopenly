var React = require("react");
var ReactRouter = require("react-router");

var LibraryHeader = require("./libraryheader.js");
var LibraryItemList = require("./libraryitemlist.js");
var SearchBar = require("./searchbar.js");

var LibraryPage = React.createClass({
    render: function () {
        return (
            <div>
                <SearchBar />
                <LibraryItemList
                    new_items={["http://www.google.com", "http://www.facebook.com","http://www.galaxyquest.com"]}/>
            </div>
        );
    }
});

module.exports = LibraryPage;

