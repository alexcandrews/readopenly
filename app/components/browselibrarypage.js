var React = require("react");
var ReactRouter = require("react-router");

var BrowseItemList = require("./browseitemlist.js");
var BackgroundImage = require("./backgroundimage.js");
var SearchBar = require("./searchbar.js");

var BrowseLibraryPage = React.createClass({

    render: function() {
        return (
            <div className="container">
                <BackgroundImage />
                <SearchBar />
                <BrowseItemList />
            </div>
        );
    }
});


module.exports = BrowseLibraryPage;