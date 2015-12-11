var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
    context: __dirname + "/app",
    watch: true,
    entry: {
        javascript: "./components/main.js",
        html: "./index.html",
        vendor: ["jquery", "react", "react-router", "typeahead.js", "handlebars", "react-bootstrap"],
    },
    output: {
        filename: "js/app.js",
        path: __dirname + "/public",
    },
    plugins: [
        new ExtractTextPlugin("./css/styles.css"),
        new CommonsChunkPlugin("vendor", "./js/vendor.js", Infinity),
    ],
    devtool: 'source-map',
    module: {
        loaders: [
            // loader for React JSX
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel",
                query: {
                    presets: ['react']
                }
            },
            //{
            //    test: /\.(jpe?g|png|gif|svg)$/i,
            //    loaders: [
            //        'file?hash=sha512&digest=hex&name=[hash].[ext]',
            //        'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
            //    ]
            //},
            // loader for HTML
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]",
            },
            // loaders for Bootstrap CSS
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap")
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file?name=assets/[name].[ext]"
            },
            {
                test: /\.(woff|woff2)$/,
                loader: "url?name=assets/[name].[ext]&prefix=font/&limit=5000"
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?name=assets/[name].[ext]&limit=10000&mimetype=application/octet-stream"
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?name=assets/[name].[ext]&limit=10000&mimetype=image/svg+xml"
            },
            //{ test: /\.jpg$/, loader: "url-loader?mimetype=image/jpg" },
            //{ test: /\.png$/, loader: "url-loader?mimetype=image/png" },
            //{   // TODO: this might need to be images instead of assets
            //    test: /\.png(\?v=\d+\.\d+\.\d+)?$/,
            //    loader: "url?name=assets/[name].[ext]&limit=10000&mimetype=image/png"
            //},
            //{   // TODO: this might need to be images instead of assets
            //    test: /\.jp(e)?g(\?v=\d+\.\d+\.\d+)?$/,
            //    loader: "url?name=assets/[name].[ext]&limit=10000&mimetype=image/jpeg"
            //},
            //{   // TODO: this might need to be images instead of assets
            //    test: /\.tiff(\?v=\d+\.\d+\.\d+)?$/,
            //    loader: "url?name=assets/[name].[ext]&limit=10000&mimetype=image/tiff"
            //}
        ],
    },
}
