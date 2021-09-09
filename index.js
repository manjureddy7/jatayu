// const  { intro } = require('./helpers/intro');
const { getProjectDetails } = require('./helpers/app');
const { log, chalk } = require('./helpers/log');
const { initiateSelectedProject } = require('./helpers/project');
const path = require('path');
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

/**
    * Introduction to the package
*/
// intro();

// const readUsrFile = () => {

// }

// console.log('filename', require.main.filename)
// console.log('path', path.dirname(require.main.filename))
// console.log('path combine', path.join(__dirname, 'yoo'))

module.exports = {
    getProjectDetailsFromTheUser
}

