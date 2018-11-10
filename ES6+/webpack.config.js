const path = require('path');
const webpack = require('webpack');
const HWP = require('html-webpack-plugin');

let config = {
  mode: 'development',
  node: {
    __dirname: true,
    __filename: true
  },
  entry: {
    index: path.resolve(__dirname, 'js') + '/Countdown.js'
  },
  plugins: [
    new HWP({
      title: "Countdown Timer",
      template: "index.ejs",
      inject: "body",
      filename: "../index.html"
    })
  ],
  resolve: {
    extensions: ['.js'],
    alias: {
      Timer: path.resolve(__dirname,'js') + '/Timer'
    }
  },
  output: {
    publicPath: './dist/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader','css-loader']
      }
    ]
  }

};

module.exports = config;
