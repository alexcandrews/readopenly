var React = require("react");
var ReactRouter = require("react-router");

var BackgroundImage = React.createClass({
    render: function () {
        return (
            <div className="background-image">
                <img className="img-responseive background-image" src="images/galaxy.jpg" alt="readonly"/>
            </div>
        );
    }
});

module.exports = BackgroundImage;
