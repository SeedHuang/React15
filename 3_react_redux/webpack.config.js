const path =  require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output:{
    path:path.resolve(__dirname, 'dist'),
    filename: 'myfirstbunlde.js'
  },
  devServer: {
    contentBase:path.resolve(__dirname, 'dist'),
    compress: true
  },
  module:{
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      title: 'Project2',
      contentName: 'Mama',
      minify:{
        collapseWhitespace: true
      },
      hash: true,// 添加hash后缀
      template: './src/index.html'
    })
  ]
}
