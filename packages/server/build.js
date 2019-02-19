const fs = require('fs');

const packageJson = require('./package.json');

packageJson.scripts = {
  start: 'node ./index.js',
  'start:cluster': 'node ./cluster.js',
};
const dist = '../../dist';
delete packageJson.devDependencies;
try {
  fs.writeFileSync(
    `${dist}/package.json`,
    JSON.stringify(packageJson, null, 2),
  );
  console.log('build complete'); // eslint-disable-line
} catch (e) {
  throw e;
}
