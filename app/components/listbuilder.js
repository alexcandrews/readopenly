var React = require("react");
var ReactRouter = require("react-router");

var ListBuilder = React.createClass({

    render: function() {
        var list = function(libraryitem) {
            return (
                <div className="center-content" key={libraryitem.id}>
                    <li><a href={libraryitem.location}>{libraryitem.title}</a>
                        <button type="button" className="btn btn-primary btn-sm">
                        </button>
                    </li>
                </div>
            );
        };

        return (
        <ul>{this.props.libraryitems.map(list)}</ul>
        );
    }
});


module.exports = ListBuilder;