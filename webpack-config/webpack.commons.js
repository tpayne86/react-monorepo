/* eslint-env node */
const path = require('path');

module.exports = (env) => {
  const isProd = env.NODE_ENV.trim().toLowerCase() === 'production';
  const config = {
    devtool: isProd ? false : 'source-maps',
    entry: [`./${env.appConfig.folderSrc}/src/index.jsx`],
    output: {
      path: path.resolve(__dirname, '../', `dist/public/${env.appConfig.folderName}`),
      filename: isProd ? 'js/[name].[chunkHash].js' : 'js/[name].js',
      publicPath: isProd ? env.appConfig.publicPath : '',
      pathinfo: false,
    },
    resolve: {
      extensions: ['*', '.js', '.jsx', '.json', '.css', '.less', '.scss'],
      symlinks: false,
      modules: [
        'node_modules',
        `./${env.appConfig.folderSrc}`,
      ],
      alias: {
        ROOT: path.resolve(__dirname, '../'),
      },
    },
    target: 'web',
  };
  if (!isProd) {
    config.entry.unshift('react-hot-loader/patch');
  }
  return config;
};
