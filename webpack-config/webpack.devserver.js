/* eslint-env node */

module.exports = (env) => ({
  contentBase: `../dist/public/${env.appConfig.folderName}`,
  compress: true,
  port: env.DEVSERVER_PORT,
  historyApiFallback: true,
  hot: true,
  overlay: true,
  inline: true,
  open: true,
  publicPath: '/',
  proxy: {
    changeOrigin: true,
    '/(api|apiv2)/**': {
      target: env.PROXY_URL,
      secure: false,
      changeOrigin: true,
    },
  },
});
