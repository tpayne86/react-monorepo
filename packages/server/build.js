const shell = require('child_process').execSync;

const dist = '../../dist';

shell(`cp -r package.prod.json ${dist}/package.json`);
console.log('build complete'); // eslint-disable-line
