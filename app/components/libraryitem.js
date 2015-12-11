var React = require("react");
var api = require("./api.js");
var Modal = require("react-bootstrap");

// Item shown in the todo list
const LibraryItem = React.createClass({
    //getInitialState () {
    //    return { showModal: false };
    //},
    //close() {
    //    this.setState({showModal: false});
    //},
    //open() {
    //    this.setState({showModal: true});
    //},

    addItemToLibrary: function (event) {
        //this.open();
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
                            onClick={this.addItemToLibrary}
                        >{this.props.libraryitem.title}
                    </button>
                </div>
            );
        }

    }
});


module.exports = LibraryItem;

/*
 <div className="static-modal">
 <Modal show={this.state.showModal} onHide={this.close}>
 <Modal.Header closeButton>
 <Modal.Title>Modal Heading</Modal.Title>
 </Modal.Header>
 <Modal.Body>
 <p>You've added {this.props.libraryitem.title} to your library!</p>
 </Modal.Body>
 <Modal.Footer>
 <Button onClick={this.close}>Close</Button>
 </Modal.Footer>
 </Modal>
 </div>
 */