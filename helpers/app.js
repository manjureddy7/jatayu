//** This will prompt the user to provide the directory name and type of project he needs */
const inquirer = require('inquirer');

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
        message: 'Select project type',
        choices: [ 'wajs', 'wats', 'cljs', 'clts' ],
    }
];

module.exports = {
    getProjectDetails: () => {
        return inquirer.prompt(questions)
    }
}