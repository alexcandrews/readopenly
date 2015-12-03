var React = require("react");
var ReactRouter = require("react-router");

var Link = ReactRouter.Link;

var Home = React.createClass({
  getInitialState: function() {
    return {value: ''};
    },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },

  render: function() {
    var value = this.state.value;
    return <input type="text" className="form-control" placeholder="what you want to learn?" value={value} onChange={this.handleChange} />;}
});

// TODO: add this in somewhere...
// var Login = React.createClass({
    // render: function() {
      // return (
// <div><img src={'http://cdn8.openculture.com/wp-content/uploads/2013/11/old-books-32.jpg'} alt="" className="background-image"/></div>);
// }});

module.exports = Home;
