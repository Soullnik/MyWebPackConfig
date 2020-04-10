npm init -y
npm install webpack webpack-cli --save-dev
create /src
creape git ignore and add node_modules
add /img /js /sass to /src folder

create basic structure js [
  1. router.js
  2. module.js
  3. view.js
  4. controller.js
  5. data.js
]

create basic structure sass [
  1. /abstract
    1._constants.scss
    2._mixins.scss
    3.placeholders.scss
  2. /base....
]

add index.html, app.js, style.scss to /src

create webpack.config.js
const webpack = require('webpack');
const path = require('path');

module.exports = (env, options) => {
  const isProduction = options.mode === 'production';

  const config = {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, '/dist/'),
      filename: 'bundle.js'
    }
  }

  return config
}

npm install --save-dev clean-webpack-plugin

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

add to config{
  plugins: [
      new CleanWebpackPlugin(),
    ]
}


