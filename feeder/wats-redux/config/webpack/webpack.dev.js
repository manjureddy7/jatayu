// eslint-disable-next-line
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    port: '3000',
    static: ['../dist'],
    historyApiFallback: true,
    hot: true,
  },
});
