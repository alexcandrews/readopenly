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
            libraryitems: [],
            new_items: [],
            items: [],
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
                libraryitems: data.items
            });
        } else {
            // if the API call fails, redirect to the login page
            this.context.router.transitionTo('/login');
        }
    },

    // Show the list of items. This component has the following children: ListHeader, ListEntry and ListItems
    render: function () {
        var createItem = function (libraryitem) {
            return (
                <div className="center-content">
                    <li><a href={libraryitem.location}>{item.title}</a>
                        <button type="button" className="btn btn-primary btn-sm">
                            <span className="glyphicon glyphicon-plus"></span>
                        </button>
                    </li>
                </div>
            );
        };

        var list = this.state.libraryitems.map(function (item) {
            return (
                <p>hello world</p>
            );
        }.bind(this));
        return <ul id="todo-list">
            {list}
            <a href="www.google.com">ITEM</a>
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

