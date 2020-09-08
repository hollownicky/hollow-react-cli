const ip = require('ip')
const path = require('path')
const webpack = require('webpack')
const baseConfig = require('./webpack.base')
const { merge } = require('webpack-merge') // 用法更新

const resolve = (url) => {
  return path.resolve(__dirname, url)
}

process.env.NODE_ENV = 'development'

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    open: true,
    hot: true,
    port: 9000,
    host: ip.address(),
    contentBase: [resolve('../dist'), resolve('../public')]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin() // 热更新
  ]
})