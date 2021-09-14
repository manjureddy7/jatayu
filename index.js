#!/usr/bin/env node
const figlet = require('figlet');
const { getProjectDetails } = require('./helpers/app');
const { log, chalk } = require('./helpers/log');
const { initiateSelectedProject } = require('./helpers/project');

/**
 * Will be doing installing packages in second iteration1
 */
// const exec = require('child_process').exec;
// const Spinner = require('cli-spinner').Spinner;



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
    initiateSelectedProject(dirName, projectType, projectSupport);
}

getProjectDetailsFromTheUser();


/**
 * ------------------- Commented code for second iteration ----------------------
 */

/**
 * Will be doing installing packages in second iteration1
 */

// const getData = async () => {
//     const jsonString = await fs.readFile('./test.json');
//     return JSON.parse(jsonString);
// }

// getData().then((data) => {
//     const packages = data.deps.join(" ");
//     const command = `npm install ${packages}`;
//     const spinner = new Spinner(chalk.greenBright.bold(`Installing all the required dependencies!`));
//     spinner.setSpinnerString('▖▘▝▗')
//     spinner.start();
//     exec(command, (error) => {
//         if(!error) {
//             spinner.setSpinnerString('')
//             spinner.stop(false);
//             log(chalk.greenBright.bold(`\nDependencies successfully installed!!!`))
//         };
//     })
// }).catch(e => console.log('e'))

