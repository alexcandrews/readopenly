var React = require("react");
var api = require("./api.js");

// Item shown in the todo list
var LibraryItem = React.createClass({
    addItemToLibrary: function (event) {
        event.preventDefault();
        api.addItemToUserLibrary(this.props.libraryitem);
    },
    // render the Item
    render: function () {
        var pathname = window.location.href;
        if (!pathname.includes('browse')) {
            return (
                <div key={this.props.libraryitem.id}>
                    <a href={this.props.libraryitem.location}
                       className="btn btn-primary btn-block lib-item">
                        {this.props.libraryitem.title}
                    </a>
                </div>
            );
        } else {
            return (
                <div key={this.props.libraryitem.id}>
                    <button type="button"
                            className="btn btn-primary btn-block lib-item"
                            onClick={this.addItemToLibrary}>
                        {this.props.libraryitem.title}
                    </button>
                </div>
            );
        }

    }
});


module.exports = LibraryItem;