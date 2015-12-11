var React = require("react");
var api = require("./api.js");

// Item shown in the todo list
var LibraryItem = React.createClass({
    addItemToLibrary: function (event) {
        event.preventDefault();
        console.log("just clicked " + this.props.libraryitem);
        api.addItemToUserLibrary(this.props.libraryitem);
    },
    // render the Item
    render: function () {
        //user = User.verifyToken(req.headers.authorization, function (user) {
         //   if (user) {
        if (this.props.page == "library") {
            return (
                <div key={this.props.libraryitem.id}>
                    <a href={this.props.libraryitem.link}
                        className="btn btn-primary btn-block">
                        {this.props.libraryitem.title}
                    </a>
                </div>
            );
        } else {
            return (
                <div key={this.props.libraryitem.id}>
                    <button type="button"
                            className="btn btn-primary btn-block"
                            onClick={this.addItemToLibrary}
                        >{this.props.libraryitem.title}
                        [click to add to library]
                    </button>
                </div>
            );
        }
            //} else {
            //    return (
            //        <div key={this.props.libraryitem.id}>
            //            });
            //            <button type="button"
            //                    className="btn btn-primary btn-block">
            //                {this.props.libraryitem.title}
            //            </button>
            //        </div>
            //    );
            //}

    }
});


module.exports = LibraryItem;