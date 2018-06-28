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
      {
        test:/\.js$/|/\.jsx$/,
        loader:'eslint-loader',
        include:`${__dirname}/src`,
        exclude: /bundle\.js$/
      }
    ],
    loaders:[
      { test: /\.js$/,
        exclude:/node_modules/,
        loader: 'babel-loader',
        query:{
          presets:['es2015','react']
        }
      }
    ]
  },
  devServer:{
    inline:true,
    port:8008
  },
  plugins:[HTMLWebpackPluginConfig]
};

