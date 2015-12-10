var React = require("react");
var ReactRouter = require("react-router");

var BrowseItemList = require("./browseitemlist.js");

var BrowseLibraryPage = React.createClass({

    render: function() {
        return (
            <div>
                <BrowseItemList />
            </div>
        );
    }
});


module.exports = BrowseLibraryPage;