var React = require("react");
var ReactRouter = require("react-router");

var AboutTheBook = React.createClass({
    render: function() {
        return (
            <div>
                <h2>About The Book:</h2>
                <form className="form">
                    <div className="form-group">
                        <label for="nameOfBook">Name of the Book: </label>
                        <input type="text" className="form-control" id="nameOfBook" placeholder="Book Title" ref="nameOfBook" autoFocus={true} />
                    </div>
                    <div className="form">
                        <label for="URLtoBook">URL to Book: </label>
                        <input type="text" className="form-control" id="URLtoBook" placeholder="http://book..." ref="URLtoBook"/>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = AboutTheBook;
