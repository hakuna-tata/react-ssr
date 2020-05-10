const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  mode: "development",
  entry: {
    server: path.join(__dirname, '../src/server-entry.js')
  },
  output:{
    filename: 'server.js',
    path: path.join(__dirname, '../dist'),
    libraryTarget: 'commonjs2'
  },
  externals: [nodeExternals()],
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
          'isomorphic-style-loader',
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
  }
}