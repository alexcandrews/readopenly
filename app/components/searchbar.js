var React = require("react");
var ReactRouter = require("react-router");
var ReactDOM = require('react-dom');
var $ = require("jquery");
var Bloodhound = require("typeahead.js");
var Handlebars = require("handlebars");

var api = require("./api.js");

var SearchBar = React.createClass({
    getInitialState: function () {
        return {
            query: '',
            results: []
        };
    },

    handleChange: function (e) {
        this.setState({
            query: e.target.value
        });
    },

    componentDidMount: function () {
        var engine = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.whitespace,
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            limit: 3,
            prefetch: 'api/libraryitems',
            remote: {
                url: 'api/libraryitems',
                transform: function (response) {
                    return $.map(response.libraryitems, function (item) {
                        console.log("title: " + item.title);
                        //console.log("description: " + item.description);
                        //console.log("authors: " + item.authors);
                        //console.log("category: " + item.category);
                        //console.log("tags: " + item.tags);
                        //console.log("submittedby: " + item.submittedby);
                        //console.log("users: " + item.users);
                        //console.log("created: " + item.created);
                        return {
                            title: item.title,
                            location: item.location,
                            authors: item.authors,
                            category: item.category,
                            tags: item.tags,
                            // submittedby: item.submittedby,
                            // users: item.users,
                            // created: item.created
                        };
                    });
                }
            }
        });

        // initialize the bloodhound suggestion engine
        engine.initialize();

        //promise
        //    .done(function() { console.log('ready to go!'); })
        //    .fail(function() { console.log('err, something went wrong :('); });

        $(ReactDOM.findDOMNode(this.refs.suggestion)).typeahead({
                hint: true,
                highlight: true
            },
            {
                name: 'engine',
                displayKey: 'location',
                source: engine.ttAdapter(),
                templates: {
                    empty: [
                        '<div class="empty-message">',
                        'unable to find any learning resources',
                        '</div>'
                    ].join('\n'),
                    suggestion: Handlebars.compile(
                        '<div class="btn-default">{{title}} - {{authors}}<br></div>'
                    )

                }
            });
    },

    render: function () {
        return (
            <div>
                <input name="q" id="query" ref="suggestion" className="form-control suggestions search-bar" type="text"
                       placeholder="what do you want to learn?"
                       value={this.state.query}
                       onChange={this.handleChange} onBlur={this.handleChange}/>
            </div>
        );
    }
});

module.exports = SearchBar;
