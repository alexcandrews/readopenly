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
            // list of items "checked out"
            libraryitems: [],
            new_items: [],
            items: []
        };
    },

    // when the component loads, get the list items
    componentDidMount: function () {
        api.getLibraryItems(this.listSet);
    },

    // reload the list of items
    reload: function () {
        api.getLibraryItems(this.listSet);
    },

    // callback for getting the list of items, sets the list state
    listSet: function (status, data) {
        if (status) {
            // set the state for the list of items
            this.setState({
                libraryitems: data.libraryitems
            });
        } else {
            // if the API call fails, redirect to the login page
            this.context.router.transitionTo('/login');
        }
    },

    // Show the list of items. This component has the following children: ListHeader, ListEntry and ListItems
    render: function () {
        /*
        var createItem = function (libraryitem) {
            return (
                <div className="center-content">
                    <li><a href={libraryitem.location}>{libraryitem.title}</a>
                        <button type="button" className="btn btn-primary btn-sm">
                            <span className="glyphicon glyphicon-plus"></span>
                        </button>
                    </li>
                </div>
            );
        }
        */
        return <ul id="librarylist">
            <ListBuilder libraryitems={this.state.libraryitems} reload={this.props.reload} />
            {
                //this.state.libraryitems.map(createItem)
            }
        </ul>;
        //return <ul>{this.props.libraryitems.map(createItem)}</ul>;
        /*
        var displayItem = function(item) {
            return (
                <div className="center-content">
                    <button type="button" className="btn-block btn-default" value={this.props.title}></button>
                </div>
            );
        }
        return <p>hello</p>;
        */
        //return <ul>{this.props.libraryitems.map(displayItem)}</ul>;

    }
});

module.exports = LibraryItemList;

