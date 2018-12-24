/* eslint-env node */
const path = require('path');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const cssnano = require('cssnano');

module.exports = (env) => {
  const isProd = env.NODE_ENV.trim().toLowerCase() === 'production';
  const include = path.resolve(__dirname, '../', `${env.appConfig.folderSrc}/src/`);

  return {
    module: {
      rules: [
        {
          test: /\.js(x?)$/,
          use: ['source-map-loader'],
          enforce: 'pre',
        },
        {
          enforce: 'pre',
          test: /\.js(x?)$/,
          include,
          exclude: /node_modules/,
          loader: 'eslint-loader',
        },
        {
          test: /\.js(x?)$/,
          exclude: /node_modules/,
          include,
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
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: false,
                include,
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
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: false,
                include,
                plugins() {
                  return [autoprefixer('last 2 versions', 'ie 10'), cssnano()];
                },
              },
            },
            {
              loader: isProd ? 'sass-loader' : 'fast-sass-loader',
              options: {
                processCssUrls: false,
                sourceMap: false,
                include,
                includePaths: [include],
                data: '@import "Styles/themes/core.scss";',
              },
            },
          ],
        },
        // extra loader only because of antd designs
        {
          test: /\.less$/,
          use: [
            !isProd ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: false,
                include,
                plugins() {
                  return [autoprefixer('last 2 versions', 'ie 10'), cssnano()];
                },
              },
            },
            {
              loader: 'less-loader',
              options: {
                include,
                sourceMap: false,
                modifyVars: env.antThemeVars,
                javascriptEnabled: true,
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
      ],
    },
  };
};
