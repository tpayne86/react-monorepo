/* eslint-env node */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');
const S3Plugin = require('webpack-s3-plugin');
const appModule = require('./webpack.loaders');
const { webpackProdEnvironmentVariableForBrowser } = require('./webpack.env');

module.exports = (env) => {
  console.log('i am production');
  const prodConfig = {
    module: appModule(env).module,
    plugins: [
      webpackProdEnvironmentVariableForBrowser(),
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
        title: env.appConfig.appHTMLTitle,
        filename: 'index.html',
        template: `./${env.appConfig.folderSrc}/src/index.ejs`,
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
        appBase: env.appConfig.appBase,
        inject: true,
      }),
      new webpack.optimize.ModuleConcatenationPlugin(),
      new webpack.HashedModuleIdsPlugin(),
      new CleanWebpackPlugin(
        `../../../deploy/public/${env.appConfig.folderName}`,
        {
          root: path.resolve(__dirname, '../../../'),
          exclude: [],
          verbose: true,
          dry: false,
        },
      ),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[chunkHash].css',
        allChunks: true,
      }),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
    optimization: {
      splitChunks: {
        name: true,
        minSize: 30,
        cacheGroups: {
          vendor: {
            chunks: 'initial',
            test: /node_modules/,
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
        new TerserPlugin({
          cache: true,
          parallel: true,
          sourceMap: true,
        }),
        new OptimizeCSSAssetsPlugin(), //
      ],
    },
  };
  if (env.S3_UPLOAD) {
    prodConfig.plugins.push(
      new S3Plugin({
        // Exclude uploading of html
        exclude: /.*\.html$/,
        // s3Options are required
        s3Options: {
          accessKeyId: env.AWS_ACCESS_KEY_ID,
          secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
          region: 'ap-south-1',
          ACL: '',
        },
        s3UploadOptions: {
          Bucket: 'hme-fe-assets',
        },
        cdnizerOptions: {
          defaultCDNBase: 'd2swu0i12x7t1k.cloudfront.net',
        },
        basePath: env.appConfig.folderName,
      }),
    );
  }
  return prodConfig;
};
