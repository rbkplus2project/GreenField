var path = require('path');
var SRC_DIR = path.join(__dirname, '/frontend/components');
var DIST_DIR = path.join(__dirname, '/frontend');

module.exports = {
  entry: `${SRC_DIR}/app.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  // devServer: {
  //   inline: false,
  //   contentBase: "./frontend",
  // },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015'],
            plugins: ['transform-class-properties']
          }
        }
      }
    ]
  }
};
