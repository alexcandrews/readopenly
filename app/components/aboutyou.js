var React = require("react");
var ReactRouter = require("react-router");

var AboutYou = React.createClass({
    render: function() {
        return (
            <div>
                <h2>About You:</h2>
                <form className="form">
                    <div className="form-group">
                        <label for="name">Your Name: </label>
                        <input type="text" className="form-control" id="name" placeholder="Jon Doe" ref="name" />
                    </div>
                    <div className="form-group">
                        <label for="email">URL to Book: </label>
                        <input type="text" className="form-control" id="email" placeholder="youremail@email.com" ref="email"/>
                    </div>
                    <div className="form-group">
                        <label for="institution">Your Institution/Organization: </label>
                        <input type="text" className="form-control" id="institution" placeholder="?" ref="institution"/>
                    </div>
                    <div className="form-group">
                        <label for="comments">Additional Comments: </label>
                        <input type="text" className="form-control" id="comments" placeholder="Anything else about the resource?" ref="comments"/>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = AboutYou;
