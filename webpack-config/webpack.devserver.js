/* eslint-env node */

module.exports = env => ({
  contentBase: `../dist/public/${env.appConfig.folderName}`,
  compress: true,
  port: env.DEVSERVER_PORT,
  historyApiFallback: true,
  hot: true,
  overlay: true,
  openPage: env.publicPath,
  proxy: {
    changeOrigin: true,
    '/(api|apiv2|static)/**': {
      target: env.PROXY_URL,
      secure: false,
      changeOrigin: true,
    },
  },
});
