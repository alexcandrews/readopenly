var React = require("react");
var ReactRouter = require("react-router");

var SearchBar = React.createClass({
    getInitialState: function () {
        return {value: ''};
    },
    handleChange: function (event) {
        this.setState({value: event.target.value});
    },

    render: function () {
        var value = this.state.value;
        return (
            <div className="center-content">
                <center>
                    <input type="text" className="form-control" placeholder="what do you want to learn?" value={value}
                           onChange={this.handleChange}/>
                </center>
            </div>
        );
    }
});

module.exports = SearchBar;
