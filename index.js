#!/usr/bin/env node
const figlet = require('figlet');
const { getProjectDetails } = require('./helpers/app');
const { log, chalk } = require('./helpers/log');
const { initiateSelectedProject } = require('./helpers/project');




/**
    * Introduction to the package
*/
console.log(
    chalk.yellow(
      figlet.textSync('Welcome to JATAYU !', { horizontalLayout: 'full' })
    )
);

/**
    * Get dirName & projectType from the user
*/
const getProjectDetailsFromTheUser = async () => {
    const details = await getProjectDetails();
    const { dirName, projectType } = details;
    log(chalk`
        Directory: {red ${dirName}}
        Project Type: {rgb(255,131,0) ${projectType}}
    `)
    initiateSelectedProject(dirName, projectType);
}
getProjectDetailsFromTheUser();

module.exports = {
    getProjectDetailsFromTheUser
}

