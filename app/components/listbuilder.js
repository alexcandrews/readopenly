var React = require("react");
var ReactRouter = require("react-router");

var ListBuilder = React.createClass({
    addItemToLibrary: function (event) {
        event.preventDefault();
        console.log("additemtolibrary");
        return;
    },
    render: function() {
        var list = function(libraryitem) {
            {console.log(libraryitem.title)}
            return (
                <div className="center-content" key={libraryitem.id}>
                    <button type="button" className="btn-block btn-primary" onClick={this.addItemToLibrary}>{libraryitem.title}</button>
                </div>
            );
        };

        return (
        <ul>{this.props.libraryitems.map(list)}</ul>
        );
    }
});


module.exports = ListBuilder;