var React = require("react");
var ReactRouter = require("react-router");

var LibraryHeader = require("./libraryheader.js");
var ListItems = require("./listitems.js");
var ListBuilder = require("./listbuilder.js");

var api = require("./api.js");
var auth = require("./auth.js");

// Library list page, show items checked out
var LibraryItemList = React.createClass({
    // context so the component can access the router
    contextTypes: {
        location: React.PropTypes.object
    },
    // initial state
    getInitialState: function () {
        return {
            // list of all library items
            browseitems: []
        };
    },

    // when the component loads, get the list items
    componentDidMount: function () {
        api.getAllLibraryItems(this.listSet);
    },

    // reload the list of items
    reload: function () {
        api.getAllLibraryItems(this.listSet);
    },

    // callback for getting the list of items, sets the list state
    listSet: function (status, data) {
        if (status) {
            // set the state for the list of items
            this.setState({
                browseitems: data.libraryitems
            });
            console.log(this.state.browseitems)
        } else {
            // if the API call fails, redirect to the login page
            this.context.router.transitionTo('/loginorregister');
        }
    },

    // Show the list of items. This component has the following children: ListHeader, ListEntry and ListItems
    render: function () {
        return (
            <ul id="librarylist">
                <ListBuilder libraryitems={this.state.browseitems} page={"browse"} reload={this.props.reload} />
            </ul>
        );
    }
});

module.exports = LibraryItemList;

