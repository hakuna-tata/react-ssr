const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    client: path.join(__dirname, '../src/client-entry.js')
  },
  output:{
    filename: '[name].[hash:8].js',
    path: path.join(__dirname, '../dist'),
    publicPath: '/public/'
  },
  resolve:{
    extensions: [".jsx", ".js"]
  },
  module:{
    rules:[
      {
        test: /\.js(x)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use:[
          'style-loader',
          {
            loader: 'css-loader',
            options:{
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]'
              }
            }
          }
        ]
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../public/index.html'),
      favicon: path.join(__dirname, '../public/favicon.ico')
    })
  ]
}