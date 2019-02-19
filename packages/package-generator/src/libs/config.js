const path = require('path');

const current = process.cwd();
const packagesDir = path.resolve(__dirname, '../../../');

module.exports = {
  current,
  packagesDir,
};
