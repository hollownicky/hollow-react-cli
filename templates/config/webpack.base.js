const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const resolve = (url) => {
  return path.resolve(__dirname, url)
}

module.exports = {
  entry: resolve('../src/index'),
  output: {
    path: resolve('../dist/js'),
    filename: 'js/index.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /^(.*global).*\.(css|less)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
                hmr: process.env.NODE_ENV === 'development'
            }
          },
          // 'style-loader',
          'css-loader',
          'less-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader"
        }
      },
    ]
  },
  resolve: {
    alias: {
      "@": resolve('../src') // 模块别名
    },
    extensions: [".js", ".jsx", ".json", ".css", ".less"] // 文件省略后缀的查找模块顺序
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css'
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: resolve("../public/index.html")
    }),
    new CleanWebpackPlugin()
  ]
}