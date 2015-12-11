var React = require("react");
var ReactRouter = require("react-router");
var Login = require("./login");
var Register = require("./register");
var BackgroundImage = require("./backgroundimage.js");

var SearchBar = React.createClass({
    render: function () {
        return (
            <div>
                <BackgroundImage />
                <div className="center-content">
                    <Login />
                </div>
                <div className="or-divide center-content">
                    <span><h3>OR</h3></span>
                </div>
                <div className="center-content">
                    <Register />
                </div>
            </div>
        );
    }
});

module.exports = SearchBar;
