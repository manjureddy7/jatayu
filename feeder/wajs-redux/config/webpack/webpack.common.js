const path = require('path');

// This will generate a index.html file in the destination folder taking  the output script file
// eslint-disable-next-line
const HtmlWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: `${process.cwd()}/index.js`,
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'main.js',
  },
  target: 'web',
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css|.scss$/i,
        exclude: /node_modules/,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: `${process.cwd()}/public/index.html`,
      filename: './index.html',
    }),
  ],
};
