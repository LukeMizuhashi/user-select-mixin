const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': 'development',
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    https: {
      key: fs.readFileSync("sysops/webpack/crypto/domain-key.txt"),
      cert: fs.readFileSync("sysops/webpack/crypto/domain-crt.txt")
    },
    compress: true,
    hot: true,
    public: 'luke-mizuhashi.abilityapp.org.uk',
    host: '0.0.0.0',
    port: 443,
    open: false
  },
});

