var React = require("react");
var api = require("./api.js");

// Item shown in the todo list
var LibraryItem = React.createClass({
    addItemToLibrary: function (event) {
        event.preventDefault();
        console.log("additemtolibrary");
    },
    // render the Item
    render: function () {
        return (
            <div key={this.props.libraryitem.id}>
                <button type="button"
                    className="btn-block btn-primary"
                    onClick={this.addItemToLibrary}>{this.props.libraryitem.title}
                </button>
            </div>

        );
    }
});

module.exports = LibraryItem;