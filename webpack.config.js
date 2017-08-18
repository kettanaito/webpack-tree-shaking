const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        dead_code: true, // this tells the plugin to remove dead code (tree shaking)
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['latest', {
              es2015: {
                modules: false // we need to prevent module transformation
              }
            }]
          ]
        }
      }
    ]
  }
};
