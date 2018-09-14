const babelConfig = (api) => {
  const config = {
    presets: [
      ['@babel/preset-env', {
        modules: false,
        useBuiltIns: 'usage',
        targets: {
          browsers: ['last 2 versions', 'safari >= 7'],
        },
      }],
      '@babel/preset-react',
    ],
    plugins: [
      ['import', { libraryName: 'antd', libraryDirectory: 'lib', style: true }],
      '@babel/plugin-syntax-dynamic-import',
      'react-hot-loader/babel',
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-transform-runtime',
      [
        'module-resolver',
        {
          root: [
            './src',
          ],
          alias: {
            App: './src/App',
            Router: './src/App/Router',
            Constants: './src/Constants',
            Services: './src/Services',
            Store: './src/Store',
            Styles: './src/Styles',
            Assets: './src/Assets',
          },
        },
      ],
    ],
  };
  if (api.env('test')) {
    config.presets.splice(0, 1, ['@babel/preset-env']);
    config.plugins.splice(0, 1, ['import', { libraryName: 'antd', libraryDirectory: 'lib' }]);
    config.plugins.push('@babel/plugin-transform-modules-commonjs');
  }
  return config;
};

module.exports = babelConfig; //eslint-disable-line
