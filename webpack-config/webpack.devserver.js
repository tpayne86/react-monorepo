/* eslint-env node */

module.exports = env => ({
  contentBase: `../dist/public/${env.appConfig.folderName}`,
  compress: true,
  port: env.port,
  historyApiFallback: true,
  hot: true,
  overlay: true,
  openPage: env.publicPath,
  proxy: {
    changeOrigin: true,
    '/(api|apiv2|static)/**': {
      target: env.PROXY_ORIGIN.trim() === 'development' ? env.appProxy.development : env.appProxy.staging,
      secure: false,
      changeOrigin: true,
    },
  },
});
