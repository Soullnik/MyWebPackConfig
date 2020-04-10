***npm init -y***

***npm install webpack webpack-cli --save-dev***

##### create [ */src* ] #####

##### create git ignore and add node_modules #####
##### add [ */img /js /sass* ] to [ */src* ] folder #####

##### create basic structure js #####
```
[
  1. router.js
  2. module.js
  3. view.js
  4. controller.js
  5. data.js
]
```

##### basic structure sass #####
```
[
  1. /abstract
    1._constants.scss
    2._mixins.scss
    3.placeholders.scss
  2. /base....
]
```

##### add *index.html*, *app.js*, *style.scss* to [ */src* ] #####
```
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
```

***npm install --save-dev clean-webpack-plugin***
```
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

add to config{
  plugins: [
      new CleanWebpackPlugin(),
    ]
}
```
***npm install -D babel-loader @babel/core @babel/preset-env webpack***
```
{
  test: /\.m?js$/,
  exclude: /(node_modules|bower_components)/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env']
    }
}
```
***sudo npm install sass-loader node-sass css-loader style-loader --save-dev***
```
{
  test: /\.scss/,
  use: [
    'style-loader', 'sass-loader', 'sass-loader'
  ]
}
```
***sudo npm install file-loader --save-dev***
```
{
  test: /\.(png|jpe?g|gif|svg|mp3)$/i,
  use: [
    {
      loader: 'file-loader',
    },
  ],
},
```
***npm install --save-dev mini-css-extract-plugin***
```
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
```
##### add *style.scss* to entry #####

***npm install --save-dev html-webpack-plugin***

##### add new HtmlWebpackPlugin() #####

***sudo npm i -D eslint-loader***

***npm install --save-dev babel-eslint***

***npx install-peerdeps --dev eslint-config-airbnb***

***npm install -D eslint-config-prettier eslint-plugin-prettier***
```
{
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'eslint-loader',
  options: {
    // eslint options (if necessary)
  },
},
```
***npm install webpack-dev-server --save-dev***



# First start #

##### 1 #####
***git checkout develop***
##### 2 #####
***npm init***
##### 3 #####
***npm install***



# NOTE #


## 1 webpack.config.js ##

***npm dev*** ``` "dev": "webpack --mode development" ```
##### запускает компиляцию вебпака в моде девелопмент (тобишь читаемом) #####

***npm build*** ``` "build": "webpack --mode production" ``` 
##### запускает компиляцию вебпака в продакш, когда все сжимается #####

***npm watch*** ``` "watch": "webpack --mode development" ```
 ##### можно убрать, т.к. в конфиге вебпака прописно watch сразу на develop #####

***npm start*** ``` "start": "webpack-dev-server --mode development --open" ``` 
##### запускает лайв сервер #####

***npm clear*** ``` "clear": "del-cli dist" ```
##### для удаления диста (например перед пулом в репу) #####



## 2 useful commands and etc ##

***Ctrl + C***
##### остановить сервер #####
