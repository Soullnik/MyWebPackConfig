const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, options) => {
  const isProduction = options.mode === 'production';

  const config = {
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? 'none' : 'source-map',
    watch: !isProduction,
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, '/dist/'),
      filename: 'bundle.js'
    },
    
    plugins: [
      new CleanWebpackPlugin(),
    ]
  }

  return config
}