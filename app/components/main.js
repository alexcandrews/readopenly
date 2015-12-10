var React = require("react");
var ReactDOM = require('react-dom');
var ReactRouter = require("react-router");

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var App = require("./app.js");
var HomePage = require("./homepage.js");
var LibraryItemList = require("./libraryitemlist.js");
var SubmitResourcePage = require("./submitresourcepage");
var LoginOrRegisterPage = require("./loginorregisterpage.js");
var BrowseLibraryPage = require("./browselibrarypage.js");
var List = require("./list.js");
var LibraryPage = require("./librarypage.js");
var Login = require("./login.js");
var Register = require("./register.js");

require("../../node_modules/bootstrap/dist/css/bootstrap.min.css");
require("../css/app.css");

var routes = (
    <Router>
        <Route name="app" path="/" component={App}>
            <IndexRoute component={HomePage}/>
            <Route name="librarypage" path="/librarypage" component={LibraryPage}/>
            <Route name="submitresourcepage" path="/submitresourcepage" component={SubmitResourcePage}/>
            <Route name="loginorregisterpage" path="/loginorregisterpage" component={LoginOrRegisterPage}/>
            <Route name="browselibrarypage" path="/browselibrarypage" component={BrowseLibraryPage}/>
            <Route name="list" path="/list" component={List}/>
            <Route name="libraryitemlist" path="/libraryitemlist" component={LibraryItemList}/>
            <Route name="login" path="/login" component={Login}/>
            <Route name="register" path="/register" component={Register}/>
        </Route>
    </Router>
);

ReactDOM.render(routes, document.getElementById('content'));

/*
 Code I removed:
 <Route name="active" path="/list/active" component={LibraryItemList} />
 <Route name="completed" path="/list/completed" component={LibraryItemList} />
 */
