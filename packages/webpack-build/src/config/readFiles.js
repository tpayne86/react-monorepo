const fs = require('fs');

/**
 * @description getJSONFile reads a json file and returns
 * parsed json or file data
 * @param {string} fileName
 * @param {string|null} filepath
 * @param {bool} parse
 * @param {bool} ignoreFileDoesNotExist
 * @returns {object} json
 */
function getJSONFile(
  fileName,
  filePath = null,
  parse = true,
  ignoreFileDoesNotExist = true,
) {
  try {
    const path = !filePath ? `./${fileName}` : `${filePath}/${fileName}`;
    const file = fs.readFileSync(path, 'utf8');
    return parse ? JSON.parse(file) : file;
  } catch (e) {
    if (ignoreFileDoesNotExist) {
      throw e;
    } else {
      return parse ? {} : '';
    }
  }
}

module.exports = getJSONFile;
