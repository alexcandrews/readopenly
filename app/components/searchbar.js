var React = require("react");
var ReactRouter = require("react-router");
var ReactDOM = require('react-dom');
var $ = require("jquery");
var Bloodhound = require("typeahead.js");
var Handlebars = require("handlebars")

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
        var engine = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.whitespace,
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            limit: 10,
            remote: {
                url: 'api/libraryitems',
                transform: function (response) {
                    //console.log(response.libraryitems)
                    return $.map(response.libraryitems, function (item) {
                        console.log(item)
                        console.log("title: " + item.title)
                        return {
                            title: item.title,
                            location: item.location,
                            authors: item.authors,
                            category: item.category,
                            tags: item.tags,
                            submittedby: item.submittedby,
                            users: item.users,
                            created: item.created
                        };
                    });
                },
                rateLimitBy: 'debounce',
                rateLimitWait: 300
            }
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
                //displayKey: 'title',
                source: engine.ttAdapter(),
                templates: {
                    empty: [
                        '<div class="empty-message">',
                        'unable to find any Best Picture winners that match the current query',
                        '</div>'
                    ].join('\n'),
                    suggestion: Handlebars.compile(
                        '<div><strong>title:</strong> {{title}} <strong>url:</strong> {{location}} <strong>authors:</strong> {{authors}} <strong>tags:</strong> {{tags}} <strong>created on:</strong> {{created}}' +
                        '<br><br></div>'
                    )

                }
                //templates: {
                //    suggestion: function (data) {
                //        console.log(data)
                //        return (
                //            "<p style='padding:6px'>" + data + "</p>"
                //        );
                //
                //        //return template(data);
                //    }
                //}
            });
    },

    // callback for getting the list of items, sets the list state
    //listSet: function (status, data) {
    //    if (status) {
    //        // set the state for the list of items
    //        this.setState({
    //            results: data.libraryitems
    //        });
    //    }
    //    console.log(this.state.results)
    //    //} else {
    //    //    // if the API call fails, redirect to the login page
    //    //    this.context.router.transitionTo('/login');
    //    //}
    //},

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