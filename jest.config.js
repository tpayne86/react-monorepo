const jestConfig = {
  verbose: true,
  roots: [
    'packages/',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.js?$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
  },
  moduleFileExtensions: [
    'js',
    'jsx',
  ],
  unmockedModulePathPatterns: [
    '<rootDir>/node_modules/react/',
    '<rootDir>/node_modules/react-dom/',
  ],
  moduleDirectories: [
    'node_modules',
    '<rootDir>/node_modules/',
  ],
  transformIgnorePatterns: [
    '/node_modules/(?!antd|rc-*|css-*)',
    '<rootDir>/node_modules/',
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/(?!(antd))',
  ],
  modulePathIgnorePatterns: [
    '/node_modules/(?!antd)',
    '<rootDir>/node_modules/',
    '<rootDir>/packages/ui-components/src/elements',
  ],
  collectCoverage: true,
  coverageReporters: [
    'json',
    'lcov',
    'text',
  ],
};

module.exports = jestConfig // eslint-disable-line
