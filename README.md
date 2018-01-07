# Learning React15

我想说的是这不是我第一次写React了，但是写React脱离的Webpack就不是一个基础项目，而且前端项目越来越复杂，我总是会忘记很多配置，所以我写了一个最简单的项目他包括

如何最简单的使用webpack、react、react-dom、babel创建一个最简单的React项目

##Install

```
npm install webpack webpack-dev-server babel babel-core babel-preset-es2015 babel-preset-react html-webpack-plugin --save-dev
```
- webpack 是打包工具
- webpack-dev-server 是一个开发server程序，他和webpack最大区别在于，webpack-dev-server所有编译成功的产出都是在内存中的
- babel 著名的翻译工具
- babel-preset-es2015 将es2015翻译成es5
- babel-preset-react 将jsx翻译成react
- html-webpack-plugin 将html复制到产出目录中

##设置翻译器

```
module:{
  rules: [
    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
  ]
}
```
module可以看成将某种格式的文件，用一种翻译器，翻译成另一种语言

```
{
  "presets": ["es2015", "react"]
}
```
