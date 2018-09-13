/* eslint-env node */
const webpack = require('webpack'); // eslint-disable-line
const HtmlWebpackPlugin = require('html-webpack-plugin'); // eslint-disable-line
const CleanWebpackPlugin = require('clean-webpack-plugin'); // eslint-disable-line
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // eslint-disable-line
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin'); // eslint-disable-line
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // eslint-disable-line
const appPaths = require('./webpack.paths');
const appModule = require('./webpack.modules'); // eslint-disable-line

module.exports = env => ({
  module: appModule(env).module,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env.NODE_ENV),
      },
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      noInfo: true,
      options: {
        context: './',
      },
    }),
    new HtmlWebpackPlugin({
      title: appPaths.appTitle,
      filename: 'index.html',
      template: './src/index.ejs',
      minify: {
        removeComments: true,
        collapseWhitespace: false,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      publicPath: appPaths.publicPath,
      inject: true,
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new CleanWebpackPlugin(appPaths.distPath, appPaths.cleanOptions),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      allChunks: true,
    }),
  ],
  optimization: {
    splitChunks: {
      name: true,
      minSize: 30,
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          test: appPaths.nodeModules,
          name: 'vendors',
          enforce: true,
        },
        common: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2,
          enforce: true,
        },
        styles: {
          name: 'styles',
          test: /\.(le|sc|c)?ss$/,
          chunks: 'all',
          minChunks: 2,
          reuseExistingChunk: true,
          enforce: true,
        },
      },
    },
    runtimeChunk: true,
    minimizer: [
      new UglifyJsWebpackPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin(),
    ],
  },
});
