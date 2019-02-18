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
        test: /\.(js)$/,
        use: 'babel-loader',
      },
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
      {
        test: /\.eot(\?v=\d+.\d+.\d+)?$/,
        loader: 'file-loader?name=/assests/fonts/[name].[ext]',
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader:
          'file-loader?mimetype=application/font-woff&name=assests/fonts/[name].[ext]',
      },
      {
        test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
        loader:
          'file-loader?mimetype=application/octet-stream&name=assests/fonts/[name].[ext]',
      },
      {
        test: /\.svg(\?v=\d+.\d+.\d+)?$/,
        loader:
          'file-loader?mimetype=image/svg+xml&name=assests/fonts/[name].[ext]',
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/i,
        loader: 'file-loader?name=assests/images/[name].[ext]',
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
