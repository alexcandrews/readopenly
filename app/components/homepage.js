var React = require("react");
var ReactRouter = require("react-router");
var SearchBar = require("./searchbar.js");
var BackgroundImage = require("./backgroundimage.js");

var HomePage = React.createClass({
  render: function() {
    return (
        <div>
          <img src={"images/galaxy.jpg"} alt="readonly" className="background-image"/>
          <SearchBar />
        </div>
    );
  }
});

module.exports = HomePage;
