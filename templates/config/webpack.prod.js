const webpack = require('webpack')
const baseConfig = require('./webpack.base')
const { merge } = require('webpack-merge') // 用法更新

process.env.NODE_ENV = 'production'

module.exports = merge(baseConfig, {
  mode: 'production',
  optimization: {
    splitChunks: { // 代替 webpack.optimize.CommonsChunkPlugin
      // TODO 
    },
    minimizer: [ // 代替 webpack.optimize.UglifyJsPlugin
      // TODO
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': 'development'
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ]
})