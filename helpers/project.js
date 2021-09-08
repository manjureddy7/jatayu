const fs = require('fs-extra');

const { log, chalk } = require('./log');


/**
 * Copy the corresponding project type from feeder and publish to the user directory
 * @param {string} source 
 * @param {string} destination 
*/
const copyAndMove = (source, destination) => {
    fs.copy(source, destination, err =>{
        if(err) return log(chalk.red(`Unable to generate project - ${err}`));
        log(chalk.greenBright(`Project successfully generated. Please navigate to ${destination} and do npm install`));
    });
}

/**
 * Provide the project type template to the user
 * @param {string} dirName User selected dirName
 * @param {*} projectType User selected project type *oneOf WATS,WAJS,CLJS,CLTS
 */
const initiateSelectedProject = (dirName, projectType) => {
    const rootPath = process.cwd();
    const requestedDir = `${rootPath}/${dirName}`;
    if(fs.existsSync(requestedDir)) {
        log(chalk.red(`${dirName} already exists in rootPath, generating a temp one for the time being`))
        fs.mkdirSync(`./${projectType}-react`);
    } else {
        fs.mkdirSync(dirName);
        const source = `../feeder/${projectType}`;
        copyAndMove(source, dirName);
    }
}

module.exports = {
    initiateSelectedProject
}