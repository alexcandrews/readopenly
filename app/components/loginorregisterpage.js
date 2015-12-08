var React = require("react");
var ReactRouter = require("react-router");
var Login = require("./login");
var Register = require("./register");

var SearchBar = React.createClass({
    render: function () {
        return (
            <div>
                <div className="login-column col-md-4">
                    <Login />
                </div>
                <div className="register-column col-md-4">
                    <Register />
                </div>
            </div>
        );
    }
});

module.exports = SearchBar;
