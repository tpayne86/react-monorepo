/* eslint-env node */
const path = require('path');

module.exports = (env) => {
  const isProd = env.NODE_ENV.trim().toLowerCase() === 'production';
  const config = {
    devtool: isProd ? false : 'source-maps',
    entry: [`./${env.appConfig.folderSrc}/src/index.jsx`],
    output: {
      path: path.resolve(__dirname, '../', `dist/public/${env.appConfig.folderName}`),
      filename: isProd ? 'js/[name].js' : 'js/[name].js',
      publicPath: env.appConfig.publicPath || '',
      pathinfo: false,
    },
    resolve: {
      extensions: ['*', '.js', '.jsx', '.json', '.css', '.less', '.scss'],
      symlinks: false,
      modules: [
        'node_modules',
        `./${env.appConfig.folderSrc}`,
      ],
    },
    target: 'web',
  };
  if (!isProd) {
    config.entry.unshift('react-hot-loader/patch');
  }
  return config;
};
