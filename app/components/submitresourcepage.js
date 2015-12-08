var React = require("react");
var ReactRouter = require("react-router");
var AboutTheBook = require("./aboutthebook.js");
var AboutYou = require("./aboutyou.js");

var SubmitResourcePage = React.createClass({
    render: function () {
        return (
            <div>
                <AboutTheBook />
                <AboutYou />
                <button type="submit" className="btn btn-primary">Submit Resource!</button>
            </div>
        );
    }
});

module.exports = SubmitResourcePage;
