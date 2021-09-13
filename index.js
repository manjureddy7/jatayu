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
      figlet.textSync('Welcome to JATAYU !')
    )
);

/**
    * Get dirName & projectType from the user
*/
const getProjectDetailsFromTheUser = async () => {
    const details = await getProjectDetails();
    const { dirName, projectType, projectSupport } = details;
    log(chalk.greenBright.bgBlack.bold(`Directory created: ${dirName}`));
    log(chalk.greenBright.bgBlack.bold(`Selected Project type: ${projectType}`));
    log(chalk.greenBright.bgBlack.bold(`Selected Project support: ${projectSupport}`));
    initiateSelectedProject(dirName, projectType, projectSupport);
}

getProjectDetailsFromTheUser();
