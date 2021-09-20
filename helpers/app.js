//** This will prompt the user to provide the directory name and type of project he needs */
const inquirer = require('inquirer');

const projectTypes = [
  'React Component Library',
  'React Web App',
  'React Web App with Redux',
  'React Web App with Redux Toolkit',
  'React Web App with Context'
];

const projectSupport = [
  'Javascript(JS)',
  'Typescript(TS)'
]
const questions = [
    {
      name: 'dirName',
      type: 'input',
      message: 'Please enter directory name where your react template will reside',
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
      message: 'Please select template type',
      choices: projectTypes,
    },
    {
      type: 'list',
      name: 'projectSupport',
      message: 'Please select template supporting language',
      choices: projectSupport,
    },
    {
      type: 'list',
      name: 'dockerSupport',
      message: 'Do you want to add docker to the Template ?',
      choices: ['Yes', 'No'],
      when: (answers) => answers.projectType !== 'React Component Library'
    }
];

module.exports = {
    getProjectDetails: () => {
      return inquirer.prompt(questions)
    }
}