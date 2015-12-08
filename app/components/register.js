var React = require("react");
var ReactRouter = require("react-router");
var History = ReactRouter.History;

var auth = require("./auth.js");

// Register page, shows the registration form and redirects to the list if login is successful
var Register = React.createClass({
    // mixin for navigation
    mixins: [History],

    // initial state
    getInitialState: function () {
        return {
            // there was an error registering
            error: false
        };
    },

    // handle regiser button submit
    register: function (event) {
        // prevent default browser submit
        event.preventDefault();
        // get data from form
        var name = this.refs.name.value;
        var username = this.refs.username.value;
        var password = this.refs.password.value;
        if (!name || !username || !password) {
            return;
        }
        // register via the API
        auth.register(name, username, password, function (loggedIn) {
            // register callback
            if (!loggedIn)
                return this.setState({
                    error: true
                });
            this.history.pushState(null, '/list');
        }.bind(this));
    },

    // show the registration form
    render: function () {
        return (
            <div>
                <h2>Register</h2>
                <form className="form" onSubmit={this.register}>
                    <div className="form-group">
                        <label for="name">Name: </label>
                        <input type="text" className="form-control" id="name" placeholder="Name" ref="name"/>
                    </div>
                    <div className="form-group">
                        <label for="username">Username: </label>
                        <input type="text" className="form-control" id="username" placeholder="Username" ref="username"/>
                    </div>
                    <div className="form-group">
                        <label for="password">Password: </label>
                        <input type="password" className="form-control" id="password" placeholder="Password"
                               ref="password"/>
                    </div>
                    <div className="form-group">
                        <input className="btn btn-primary" type="submit" value="Register"/>
                    </div>
                    {this.state.error ? (
                        <div className="alert">Invalid username or password ya filthy animal.</div>
                    ) : null}
                </form>
            </div>
        );
    }
});

module.exports = Register;
