var React = require("react");
var ReactRouter = require("react-router");

var BackgroundImage = React.createClass({
    render: function () {
        return (
            <div className="background-image">
                <img className="img-responsive background-image" src="images/background.jpg" alt="readonly"/>
                <div className="carousel-caption">
                    <h1>learning is free.</h1>
                </div>
            </div>
        );
    }
});

module.exports = BackgroundImage;
