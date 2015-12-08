var React = require("react");
var ReactRouter = require("react-router");

var LibraryHeader = require("./libraryheader.js");
var ListItems = require("./listitems.js");

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
            new_items: [],
            items: [],
        };
    },

    // when the component loads, get the list items
    componentDidMount: function () {
        api.getItems(this.listSet);
    },

    // reload the list of items
    reload: function () {
        api.getItems(this.listSet);
    },

    // callback for getting the list of items, sets the list state
    listSet: function (status, data) {
        if (status) {
            // set the state for the list of items
            this.setState({
                items: data.items
            });
        } else {
            // if the API call fails, redirect to the login page
            this.context.router.transitionTo('/login');
        }
    },

    // Show the list of items. This component has the following children: ListHeader, ListEntry and ListItems
    render: function () {
        var createItem = function (item) {
            return (
                <div className="center-content">
                    <li><a href={item}>{item}</a>
                        <button type="button" className="btn btn-primary btn-sm">
                            <span className="glyphicon glyphicon-plus"></span>
                        </button>
                    </li>
                </div>
            );
        };
        return <ul>{this.props.new_items.map(createItem)}</ul>;
        /*
         var name = auth.getName();

         return(
         <section id="todoapp">
         <LibraryHeader name={name} items={this.state.items} reload={this.reload} />
         <section id="main">
         <ListItems items={this.state.items} reload={this.reload}/>
         </section>
         </section>
         );
         */
    }
});

module.exports = LibraryItemList;

