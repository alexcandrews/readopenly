var React = require("react");
var ReactRouter = require("react-router");

//var LibraryHeader = require("./libraryheader.js");
var LibraryItemList = require("./libraryitemlist.js");
var SearchBar = require("./searchbar.js");
var BackgroundImage = require("./backgroundimage.js");

var LibraryPage = React.createClass({
    render: function () {
        return (
            <div>
                <BackgroundImage />
                <SearchBar />
                <LibraryItemList />
            </div>
        );
    }
});

module.exports = LibraryPage;

