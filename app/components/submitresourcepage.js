var React = require("react");
var ReactRouter = require("react-router");
var api = require("./api.js");
var ListEntry = require("./listentry.js");

var SubmitPage = React.createClass({
    submitLibraryItem: function (event) {
        // prevent default browser submit
        event.preventDefault();
        // get data from form
        var title = this.refs.title.value;
        var location = this.refs.location.value;
        var description = this.refs.description.value;
        var category = this.refs.category.value;
        var authors = this.refs.authors.value;
        var tags = this.refs.tags.value;

        if (!title) {
            //TODO implement required fields
            return;
        }
        // call API to add item, and reload once added
        api.submitLibraryItem(title, location, description, category, authors, tags, this.props.reload);
        this.refs.title.value = '';
        this.refs.location.value = '';
        this.refs.description.value = '';
        this.refs.category.value = '';
        this.refs.authors.value = '';
        this.refs.tags.value = '';

    },
    render: function () {
        return (
            <div className="center-content">
                <h3>Submit a Resource</h3>
                <form className="form">
                    <div className="form-group">
                        <input type="text" className="form-control" id="title" placeholder="title" ref="title"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="location" placeholder="http://link-to-.com"
                               ref="location"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="description" placeholder=" description" ref="description"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="category" placeholder="category" ref="category"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="authors"
                               placeholder="authors (comma seperated)" ref="authors"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="tags"
                               placeholder="related topics (comma seperated)" ref="tags"/>
                    </div>
                </form>
                <button type="submit" className="btn btn-primary" onClick={this.submitLibraryItem}>Submit !</button>
            </div>
        );
    }
});

module.exports = SubmitPage;
