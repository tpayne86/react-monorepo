/* eslint-env node */
const AntdScssThemePlugin = require('antd-scss-theme-plugin'); // eslint-disable-line
const autoprefixer = require('autoprefixer'); // eslint-disable-line
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // eslint-disable-line
const cssnano = require('cssnano'); // eslint-disable-line
const appPaths = require('./webpack.paths');

module.exports = (env) => {
  const isProd = env.NODE_ENV.trim().toLowerCase() === 'production';
  return {
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.jsx$/,
          include: appPaths.srcPath,
          exclude: /node_modules/,
          loader: 'eslint-loader',
        },
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          include: appPaths.srcPath,
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
        {
          enforce: 'pre',
          test: /\.js$/,
          include: appPaths.srcPath,
          exclude: /node_modules/,
          loader: 'eslint-loader',
        },
        {
          test: /\.js$/,
          include: appPaths.srcPath,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
        {
          test: /\.css$/,
          use: [
            !isProd ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                include: appPaths.srcPath,
                sourceMap: false,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: false,
                include: appPaths.srcPath,
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
            !isProd ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: false,
                include: appPaths.srcPath,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: false,
                include: appPaths.srcPath,
                plugins() {
                  return [autoprefixer('last 2 versions', 'ie 10'), cssnano()];
                },
              },
            },
            AntdScssThemePlugin.themify({
              loader: (isProd) ? 'sass-loader' : 'fast-sass-loader',
              options: {
                processCssUrls: false,
                sourceMap: false,
                include: appPaths.srcPath,
                data: '@import "~Styles/themes/core";@import "~Styles/themes/anttheme";',
              },
            }),
          ],
        },
        // extra loader only because of antd designs
        {
          test: /\.less$/,
          use: [
            !isProd ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: false,
                include: appPaths.srcPath,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: false,
                include: appPaths.srcPath,
                plugins() {
                  return [autoprefixer('last 2 versions', 'ie 10'), cssnano()];
                },
              },
            },
            AntdScssThemePlugin.themify({
              loader: 'less-loader',
              options: {
                include: appPaths.srcPath,
                sourceMap: false,
              },
            }),
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
      ],
    },
  };
};
