const fs = require('fs');

function getJSONFile (fileName){
  try{
    const file = fs.readFileSync(`./${fileName}`, 'utf8');
    const parsed = JSON.parse(file);
    return parsed
  }
  catch(e){
    throw e;
  }
}

module.exports = getJSONFile
