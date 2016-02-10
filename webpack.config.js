var webpack = require('webpack');
var uglify = new webpack.optimize.UglifyJsPlugin();

module.exports = {
  entry: "./js/src/resumeBuilder.jsx",
  output: {
    path: "js",
    filename: "app.min.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx/,
        loader: "babel-loader",
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [uglify]
};
