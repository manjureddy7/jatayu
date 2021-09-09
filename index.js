const { getProjectDetails } = require('./helpers/app');
const { log, chalk } = require('./helpers/log');
const { initiateSelectedProject } = require('./helpers/project');


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
