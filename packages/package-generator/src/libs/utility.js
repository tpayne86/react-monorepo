const fs = require('fs');
const { ncp } = require('ncp');
const path = require('path');
const chalk = require('chalk');

ncp.limit = 16;

const { packagesDir } = require('./config');

const readFile = (file) =>
  new Promise((res, rej) => {
    fs.readFile(file, 'utf8', (err, contents) => {
      if (err) {
        rej(err);
      } else {
        res(contents);
      }
    });
  });
const writeFile = (file, data) =>
  new Promise((res, rej) => {
    fs.writeFile(file, data, { overwrite: true }, (err, contents) => {
      if (err) {
        rej(err);
      } else {
        res(contents);
      }
    });
  });

const readDirectory = (dir) =>
  new Promise((res, rej) => {
    fs.readdir(dir, (err, files) => {
      if (err) {
        rej(err);
      } else {
        res(files);
      }
    });
  });

const validatePackageExists = async (name) => {
  try {
    const trimmedName = name.trim();
    if (trimmedName.indexOf(' ') !== -1) {
      return {
        success: false,
        message: 'Invalid Name. Use kebab cases instead of space spaced',
      };
    }
    const files = await readDirectory(packagesDir);
    if (files.includes(trimmedName)) {
      return {
        success: false,
        message: `${trimmedName} is an existing package. please chose a different name`,
      };
    }
    return {
      success: true,
    };
  } catch (e) {
    return {
      success: false,
      message: 'Some Error occured',
    };
  }
};

const copyTemplate = (source, dest) =>
  new Promise((res, rej) => {
    ncp(source, dest, (err) => {
      if (err) {
        rej(err);
      } else {
        res();
      }
    });
  });

const createPackageFiles = async (packageOptions) => {
  try {
    const source = path.resolve(
      __dirname,
      '../templates/',
      packageOptions.packageType,
    );
    const dest = `${packagesDir}/${packageOptions.packageName}`;
    await copyTemplate(source, dest);
    return dest;
  } catch (e) {
    console.log(e); // eslint-disable-line
    throw e;
  }
};

const renameTemplate = async (folder, name, desc) => {
  try {
    let packageJson = await readFile(`${folder}/package.json`);
    packageJson = JSON.parse(packageJson);
    packageJson.name = `@healthifyme/${name}`;
    packageJson.description = desc;

    await writeFile(
      `${folder}/package.json`,
      JSON.stringify(packageJson, null, 2),
    );
    console.log( // eslint-disable-line
      chalk.red.bold(
        'Congratulations. package has been created. Please update dev dependencies before starting work ',
      ),
    );
  } catch (e) {
    console.error(e);
    throw e;
  }
};

module.exports = {
  readFile,
  readDirectory,
  validatePackageExists,
  createPackageFiles,
  copyTemplate,
  renameTemplate,
};
