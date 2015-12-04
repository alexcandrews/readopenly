var React = require("react");
var ReactRouter = require("react-router");

var SearchBar = React.createClass({
    getInitialState: function() {
        return {value: ''};
    },
    handleChange: function(event) {
        this.setState({value: event.target.value});
    },

    render: function() {
        var value = this.state.value;
        return (
            <div>
                <input type="text" className="form-control" placeholder="what do you want to learn?" value={value} onChange={this.handleChange} />
                <center><input className="btn btn-primary" type="submit" value="?" /></center>
            </div>
        );
    }
});

module.exports = SearchBar;
