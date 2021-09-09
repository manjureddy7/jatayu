const fs = require('fs-extra');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const { log, chalk } = require('./log');

/**
 * Copy the corresponding project type from feeder and publish to the user directory
 * @param {string} source 
 * @param {string} destination 
*/
const copyAndMove = (source, destination) => {
    fs.copy(source, destination, err =>{
        if(err) {
            log(chalk.redBright.bgYellow.bold(`Unable to generate the project, please find the error below`));
            log(chalk.red(`${err}`));
            return;
        }
        log(chalk.greenBright.bgBlack.bold(`Project successfully generated. Please navigate to ${destination} and do npm install`));
    });
}

/**
 * Provide the project type template to the user
 * @param {string} newDirName User selected Directory Name
 * @param {*} projectType User selected project type *oneOf WATS,WAJS,CLJS,CLTS
 */
const initiateSelectedProject = (newDirName, projectType) => {
    const rootPath = process.cwd();
    const requestedDir = `${rootPath}/${newDirName}`;
    if(fs.existsSync(requestedDir)) {
        log(chalk.yellow.bgBlack.bold(`A directory with name ${newDirName} already exists, creating a new folder now, you can rename as you wish and proceede!`));
        const temp = uuidv4();
        fs.mkdirSync(`./${projectType}-react-${temp}`);
    } else {
        fs.mkdirSync(newDirName);
        const source = `${path.dirname(require.main.filename)}/feeder/${projectType}`;
        copyAndMove(source, newDirName);
    }
}

module.exports = {
    initiateSelectedProject
}