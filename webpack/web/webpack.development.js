const path = require('path')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const common = require('./webpack.config')

const rootDir = path.resolve(__dirname, '..', '..')
const rootPath = path.resolve(rootDir, 'packages', 'web')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  entry: [path.join(rootPath, 'src', 'index.tsx')],
  target: 'web',
  resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx'] },
  output: {
    filename: 'web.js',
    path: path.join(rootDir, 'dist', 'web')
  },
  devServer: {
    hot: true,
    inline: true,
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(rootPath, 'public', 'index.html')
    }),
    'development' && new ReactRefreshWebpackPlugin()
  ].filter(Boolean)
})
