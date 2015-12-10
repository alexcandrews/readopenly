var React = require("react");
var ReactRouter = require("react-router");
var History = ReactRouter.History;

var auth = require("./auth.js");

// Login page, shows the login form and redirects to the list if login is successful
var Login = React.createClass({
    // mixin for navigation
    mixins: [History],

    // initial state
    getInitialState: function () {
        return {
            // there was an error on logging in
            error: false
        };
    },

    // handle login button submit
    login: function (event) {
        // prevent default browser submit
        event.preventDefault();
        // get data from form
        var username = this.refs.username.value;
        var password = this.refs.password.value;
        if (!username || !password) {
            return;
        }
        // login via API
        auth.login(username, password, function (loggedIn) {
            // login callback
            if (!loggedIn)
                return this.setState({
                    error: true
                });
            this.history.pushState(null, '/');
        }.bind(this));
    },

    // show the login form
    render: function () {
        return (
            <div>
                <h2>Login</h2>
                <form className="form" onSubmit={this.login}>
                    <div className="form-group">
                        <label for="username">Username: </label>
                        <input type="text" className="form-control" id="username" placeholder="Username" ref="username"
                               autoFocus={true}/>
                    </div>
                    <div className="form-group">
                        <label for="password">Password: </label>
                        <input type="password" className="form-control" id="password" placeholder="Password"
                               ref="password"/>
                    </div>
                    <div className="form-group">
                        <input className="btn btn-primary" type="submit" value="Login"/>
                    </div>
                    {this.state.error ? (
                        <div className="alert">Invalid username or password ya filthy animal.</div>
                    ) : null}
                </form>
            </div>
        );
    }
});

module.exports = Login;
