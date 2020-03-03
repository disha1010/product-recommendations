const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  devServer: {
    contentBase: './dist'
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  externals: {
    moment: 'moment'
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'postcss-loader', 
          options: {
            plugins: function () {
              return [
                require('autoprefixer')
              ];
            }
          }
        }, {
          loader: 'sass-loader'
        }]
      },
      { 
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        use: [
          {
            loader: 'url-loader?limit=10000&mimetype=application/font-woff',
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/"
            }
          }
        ]
        
      },
      { 
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/"
            }
          }
        ] 
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/i,
        loader: 'file-loader?name=[name].[ext]'
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin('style.css'),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/favicon.ico'
    }),
  ],
};