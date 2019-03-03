const babelConfig = (api) => {
  const config = {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
          useBuiltIns: 'usage',
          targets: {
            browsers: ['last 2 versions', 'safari >= 7'],
          },
        },
      ],
      '@babel/preset-react',
    ],
    plugins: [
      [
        'import',
        { libraryName: 'antd', libraryDirectory: 'lib', style: false },
      ],
      '@babel/plugin-syntax-dynamic-import',
      'react-hot-loader/babel',
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-transform-runtime',
    ],
  };
  if (api.env('test')) {
    config.presets.splice(0, 1, ['@babel/preset-env']);
    config.plugins.splice(0, 1, [
      'import',
      { libraryName: 'antd', style: false },
    ]);
    config.plugins.push('@babel/plugin-transform-modules-commonjs');
  }
  return config;
};

module.exports = babelConfig;
