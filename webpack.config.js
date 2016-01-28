module.exports = {
  entry: "./js/src/resumeBuilder.jsx",
  output: {
    path: "js",
    filename: "resumeBuilder.js"
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
  }
};
