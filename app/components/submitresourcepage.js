var React = require("react");
var ReactRouter = require("react-router");
var api = require("./api.js");
var ListEntry = require("./listentry.js");
var BackgroundImage = require("./backgroundimage.js");
var SubmitResource = require("./submitresource.js");

var SubmitPage = React.createClass({
    render: function () {
        return (
            <div>
                <BackgroundImage />
                <SubmitResource />
            </div>
        );
    }
});

module.exports = SubmitPage;
