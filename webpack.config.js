// require("@babel-polyfill");
var path = require("path");
var DIST_DIR = __dirname + '/public';

const common = {
  context: __dirname + "/client",
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [{
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  }
};

const client = {
  entry: './client.js',
  output: {
    filename: "client_bundle.js",
    path: DIST_DIR
  },
};

const server = {
  entry: './server.js',
  output: {
    filename: "server_bundle.js",
    path: DIST_DIR,
    libraryTarget: 'commonjs-module',
  },

};

module.exports = [
  Object.assign({}, common, client),
  Object.assign({}, common, server),
]
