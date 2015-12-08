var React = require("react");
var ReactRouter = require("react-router");
var AboutTheBook = require("./aboutthebook.js");
var AboutYou = require("./aboutyou.js");

var SubmitResourcePage = React.createClass({
    render: function() {
        return (
            <div>
                <div className="submit-resource-page-left-column col-xs-6 col-sm-4">
                    <AboutTheBook />
                    <AboutYou />
                    <button type="submit" className="btn btn-primary">Submit Resource!</button>
                </div>
                <div className="submit-resource-page-right-column col-xs-6 col-sm-4">
                    <p>hello</p>
                </div>
            </div>
        );
    }
});

module.exports = SubmitResourcePage;
