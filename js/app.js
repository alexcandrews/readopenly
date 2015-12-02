var Router = ReactRouter.Router;
var Link = ReactRouter.Link;
var Route = ReactRouter.Route;

var App = React.createClass({
  render: function() {
    return (

<div>
        <nav className="navbar navbar-default" role="navigation">
          <div className="container">
              <div className="navbar-header">
                 <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                   <span className="sr-only">Toggle navigation</span>
                   <span className="icon-bar"></span>
                   <span className="icon-bar"></span>
                   <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="/">Beginning</a>
              </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li><Link to="page">Page</Link></li>
                  <li><Link to="hello">Hello</Link></li>
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

var Login = React.createClass({
  render: function() {
    return (
      <p>this is hard</p>
    );
  }
});
  
// Run the routes
var routes = (
      <Router>
        <Route name="app" path="/" component={App}>
          <Route name="login" path="/login" handler={Login}/>
	</Route>
      </Router>
);

ReactDOM.render(routes, document.body);

