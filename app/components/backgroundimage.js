var React = require("react");
var ReactRouter = require("react-router");

var BackgroundImage = React.createClass({
    render: function () {
        return (
            <div className="backgroung-image">
                <img src="galaxy.jpg" alt="readonly"/>
            </div>
        );
    }
});

module.exports = BackgroundImage;
