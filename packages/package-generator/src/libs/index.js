const inquirer = require('inquirer');
const {
  validatePackageExists,
  createPackageFiles,
  renameTemplate,
} = require('./utility');

const createPackage = () => {
  const questions = [
    {
      type: 'input',
      name: 'packageName',
      message: 'Enter Package Name (no space and kebab case ex awesome-app)',
      validate: async (value) => {
        const res = await validatePackageExists(value);
        if (res.success) return true;
        return res.message;
      },
    },
    {
      type: 'list',
      name: 'packageType',
      message: 'What type of the package do you want to create?',
      choices: ['React', 'Utility'],
      filter(val) {
        return val.toLowerCase();
      },
    },
    {
      type: 'input',
      name: 'packageDescription',
      message: 'What does this package do? enter a short description',
      validate(value) {
        if (value) return true;
        return 'Invalid package descripion';
      },
    },
  ];

  inquirer.prompt(questions).then(async (answers) => {
    const dest = await createPackageFiles(answers);
    renameTemplate(dest, answers.packageName, answers.packageDescription);
  });
};

module.exports = {
  createPackage,
};
