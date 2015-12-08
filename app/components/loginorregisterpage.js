var React = require("react");
var ReactRouter = require("react-router");
var Login = require("./login");
var Register = require("./register");

var SearchBar = React.createClass({
    render: function () {
        return (
            <div>
                <div className="center-content">
                    <Login />
                </div>
                <div className="or-divide">
                    <span>OR</span>
                </div>
                <div className="center-content">
                    <Register />
                </div>
            </div>
        );
    }
});

module.exports = SearchBar;
