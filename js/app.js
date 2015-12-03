var Router = ReactRouter.Router;
var Link = ReactRouter.Link;
var Route = ReactRouter.Route;

var App = React.createClass({
  render: function() {
    return (

      <div>
        <nav className="navbar navbar-default" role="navigation">
          <div className="container">  
	    <a className="navbar-brand" href="/~andrew53/index.html">Home</a>
            <div className="navbar-header">
               <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                 <span className="sr-only">Toggle navigation</span>
                 <span className="icon-bar"></span>
                 <span className="icon-bar"></span>
                 <span className="icon-bar"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="login">Login</Link></li>
                <li><Link to="explore">Explore</Link></li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container">
          {this.props.children}
        </div>
      </div> 
    );
  }
});

var Explore = React.createClass({
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

var Login = React.createClass({
    render: function() {
      return (
<div><img src={'http://cdn8.openculture.com/wp-content/uploads/2013/11/old-books-32.jpg'} alt="" className="background-image"/></div>);
}});
  
// Run the routes
var routes = (
      <Router>
        <Route name="app" path="/" component={App}>
          <Route name="login" path="/login" component={Login}/>
	  <Route name="explore" path="/explore" component={Explore}/>
	</Route>
      </Router>
);

ReactDOM.render(routes, document.body);

