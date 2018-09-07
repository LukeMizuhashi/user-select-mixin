const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const distributionDirectoryName = 'dist';
const packageRoot = path.resolve(__dirname,'../../');
const distributionRoot = path.resolve(packageRoot,distributionDirectoryName);

module.exports = {
  entry: {
    app: './test/init.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: distributionRoot,
  },
  plugins: [
    new CleanWebpackPlugin(
      [distributionRoot],
      {
        root: packageRoot,
        dry: false,
      }
    ),
    new HtmlWebpackPlugin({
      template: './test/index.html',
      title: 'Camera Test'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                './node_modules'
              ]
            }
          }
        ]
      },

      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          // {
          //   loader: 'css-loader',
          //   options: {
          //     modules: true,
          //     localIdentName: '[path][name]__[local]--[hash:base64:5]'
          //   }
          // }
        ]
      },

      {
        test: /\.(html)$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              attrs: [':data-src']
            }
          },
        ]
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },

      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },

    ],
  },
};

