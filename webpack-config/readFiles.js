const fs = require('fs');

/**
 * @description getJSONFile reads a json file and returns
 * parsed json
 * @param {string} fileName
 * @returns {object} json
 */
function getJSONFile(fileName) {
  try {
    const file = fs.readFileSync(`./${fileName}`, 'utf8');
    const parsed = JSON.parse(file);
    return parsed;
  } catch (e) {
    throw e;
  }
}

module.exports = getJSONFile;
