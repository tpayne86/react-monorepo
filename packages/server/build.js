const fs = require('fs');
const fse = require('fs-extra'); // eslint-disable-line

const packageJson = require('./package.json');

packageJson.scripts = {
  start: ' node ./index',
  startcluster: 'node ./index.cluster',
};
const dist = '../../dist';
delete packageJson.devDependencies;
try {
  fs.writeFileSync(
    `${dist}/package.json`,
    JSON.stringify(packageJson, null, 2),
  );
  fse.copy('./docker', dist, (err) => {
    if (err) {
      throw err;
    }
  });
} catch (e) {
  throw e;
}
