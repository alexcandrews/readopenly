var React = require("react");
var ReactRouter = require("react-router");
var LibraryItem = require("./libraryitem.js");

var ListBuilder = React.createClass({
    render: function() {
        var librarylist = this.props.libraryitems.map(function (libraryitem) {
            return (
                <LibraryItem key={libraryitem.id} libraryitem={libraryitem} reload={this.props.reload}/>
            );
        }.bind(this));

        return (
            <ul id="center">
                {librarylist}
            </ul>
        );
    }
});
module.exports = ListBuilder;


//<ul>{this.props.libraryitems.map(list)}</ul>
