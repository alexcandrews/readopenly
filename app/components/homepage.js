var React = require("react");
var ReactRouter = require("react-router");
var SearchBar = require("./searchbar.js");

var Link = ReactRouter.Link;

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
});

module.exports = Home;
