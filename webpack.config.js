const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  devServer: {
    contentBase: "./dist"
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [{
          loader: 'style-loader', // inject CSS to page
        }, {
          loader: 'css-loader', // translates CSS into CommonJS modules
        }, {
          loader: 'postcss-loader', // Run postcss actions
          options: {
            plugins: function () { // postcss plugins, can be exported to postcss.config.js
              return [
                require('autoprefixer')
              ];
            }
          }
        }, {
          loader: 'sass-loader' // compiles Sass to CSS
        }]
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin("style.css"),
    new HtmlWebpackPlugin({template: "./src/index.html"}),
  ],
};