//可以動態插入bundle的.js檔案到index.html中
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/src/index.html`,
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry:[
    './src/index.js'
  ],
  output:{
    path:`${__dirname}/dist`,
    filename: 'index_bundle.js'
  },
  module:{
    preLoaders:[
      
    ]
  }
}

