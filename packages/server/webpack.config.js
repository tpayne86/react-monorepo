const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');


const isProd = process.env.NODE_ENV.trim() === 'production'
module.exports = {
  entry: './index-dev.js',
  target: 'node',
  // externals: [/^(?!\.|\/).+/i],
  context: path.join(__dirname, 'src'),
  externals: [/^(?!\.|\/|@healthifyme).+/i],
  output: {
    path: path.resolve('./src'),
    libraryTarget: 'commonjs',
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.less'],
  },
  node: {
    __filename: true,
    __dirname: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude:/node_modules\/@healthifyme/
      },
      {
        test: /\.css$/,
        use: [
          isProd ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: false,
              plugins() {
                return [autoprefixer('last 2 versions', 'ie 10'), cssnano()];
              },
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins() {
                return [autoprefixer('last 2 versions', 'ie 10'), cssnano()];
              },
            },
          },
          {
            loader:   'sass-loader',
            options: {
              processCssUrls: false,
              // data: '@import "../Styles/themes/core.scss";',
            },
          },
        ],
      },
      // extra loader only because of antd designs
      // {
      //   test: /\.less$/,
      //   use: [
      //     isProd ? 'style-loader' : MiniCssExtractPlugin.loader,
      //     {
      //       loader: 'css-loader',
      //     },
      //     {
      //       loader: 'postcss-loader',
      //       options: {
      //         sourceMap: false,
      //         plugins() {
      //           return [autoprefixer('last 2 versions', 'ie 10'), cssnano()];
      //         },
      //       },
      //     },
      //     {
      //       loader: 'less-loader',
      //       options: {
      //         sourceMap: false,
      //         modifyVars: {},
      //         javascriptEnabled: true,
      //       },
      //     },
      //   ],
      // },
    ]
  }
};
