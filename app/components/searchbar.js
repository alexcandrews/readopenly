var React = require("react");
var ReactRouter = require("react-router");
var ReactDOM = require('react-dom');
var $ = require("jquery");
var Bloodhound = require("typeahead.js");

var api = require("./api.js");

var SearchBar = React.createClass({
    // context so the component can access the router
    //contextTypes: {
    //    location: React.PropTypes.object
    //},

    getInitialState: function () {
        return {
            query: '',
            results: []
        };
    },

    handleChange: function (e) {
        console.log(e.target.value)
        this.setState({
            query: e.target.value,
        });
    },

    componentDidMount: function () {
        //api.getLibraryItems(this.listSet)

        //var suggestions = {
        //    query: "",
        //    results: api.getLibraryItems()
        //};

        //console.log(suggestions.results)
        var engine = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('title'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            limit: 30,
            remote: 'api/libraryitems'
        });

        // initialize the bloodhound suggestion engine
        engine.initialize();

        //var template = _.template('<span class="name"><%= name %></span>');

        $(ReactDOM.findDOMNode(this.refs.suggestion)).typeahead({
                hint: true,
                highlight: true,
            },
            {
                name: 'engine',
                displayKey: 'title',
                source: engine.ttAdapter(),
                templates: {
                    suggestion: function (data) {
                        return "<p style='padding:6px'>" + data.title + "</p>";
                        //return template(data);
                    }
                }
            });
    },

    // callback for getting the list of items, sets the list state
    listSet: function (status, data) {
        if (status) {
            // set the state for the list of items
            this.setState({
                results: data.libraryitems
            });
        }
        console.log(this.state.results)
        //} else {
        //    // if the API call fails, redirect to the login page
        //    this.context.router.transitionTo('/login');
        //}
    },

    render: function () {
        return (
            <div className="center-content">
                <input name="q" id="query" ref="suggestion" className="form-control suggestions" type="text"
                       placeholder="what do you want to learn?"
                       value={this.state.query}
                       onChange={this.handleChange} onBlur={this.handleChange}/>
            </div>
        );
    }
});

module.exports = SearchBar;


//<form action="myAction" method="GET">
//    <div className="center-content">
//        <input name="q" id="query" ref="suggestion" className="form-control suggestions" type="text"
//               placeholder="what do you want to learn?"
//               value={this.state.query}
//               onChange={this.handleChange} onBlur={this.handleChange}/>
//    </div>
//</form>