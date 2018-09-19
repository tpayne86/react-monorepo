/* eslint-env node */
module.exports = (dist, config, env) => ({
  contentBase: dist,
  compress: true,
  port: config.port,
  historyApiFallback: true,
  hot: true,
  overlay: true,
  proxy: {
    changeOrigin: true,
    '/(api|apiv2|static)/**': {
      target: env.PROXY_ORIGIN.trim() === 'development' ? config.proxy.development : config.proxy.staging,
      secure: false,
      changeOrigin: true,
    },
  },
});
