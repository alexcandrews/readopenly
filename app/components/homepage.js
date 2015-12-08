var React = require("react");
var ReactRouter = require("react-router");
var SearchBar = require("./searchbar.js");

var Link = ReactRouter.Link;

var HomePage = React.createClass({
    render: function () {
        return (
            <div>
                <SearchBar />
            </div>
        );
    }
});

module.exports = HomePage;
