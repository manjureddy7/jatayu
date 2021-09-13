//** This will prompt the user to provide the directory name and type of project he needs */
const inquirer = require('inquirer');

const projectTypes = [
  'React Component Library',
  'React Web App',
  'React webapp with basic Redux',
  'React webapp with advanced Redux',
  'React webapp with Redux toolkit',
  'React webapp with context as state management'
];

const projectSupport = [
  'Javascript(JS)',
  'Typescript(TS)'
]
const questions = [
    {
      name: 'dirName',
      type: 'input',
      message: 'Please enter your Directory name where your future project will reside',
      validate: function( value ) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter your directory name';
        }
      }
    },
    {
      type: 'list',
      name: 'projectType',
      message: 'Please select project type',
      choices: projectTypes,
    },
    {
      type: 'list',
      name: 'projectSupport',
      message: 'Please select project support ',
      choices: projectSupport,
    }
];

module.exports = {
    getProjectDetails: () => {
        return inquirer.prompt(questions)
    }
}