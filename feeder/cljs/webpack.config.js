const path = require('path');
const pkg = require('./package.json');

const fileRules = {
  test: /\.(svg|jpg|png)$/,
  use: [
    {
      loader: "url-loader",
      options: {
        limit: Infinity,
      },
    },
  ],
};

const jsRules = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-env", "@babel/preset-react"],
    },
  },
};

module.exports = {
    entry: "./src/index.js",
    mode: "production",
    output: {
      filename: "index.js",
      path: path.resolve(__dirname, "lib"),
      library: pkg.name,
      libraryTarget: "umd",
    },
    target: 'node',
    resolve: {
      extensions: ['*', '.js', '.jsx'],
    },
    externals: [
      "react",
      "react-dom",
      "@material-ui/core",
      "styled-components"
    ],
    module: {
      rules: [jsRules, fileRules],
    }
};