const fs = require('fs-extra');
const path = require('path');

const { log, chalk } = require('./log');


/**
 * Copy the corresponding project type from feeder and publish to the user directory
 * @param {string} source 
 * @param {string} destination 
*/
const copyAndMove = (source, destination) => {
    // console.log('tests---', path.combine(__dirname, ''));
    fs.copy(source, destination, err =>{
        if(err) return log(chalk.red(`Unable to generate project - ${err}`));
        log(chalk.greenBright(`Project successfully generated. Please navigate to ${destination} and do npm install`));
    });
}

/**
 * Provide the project type template to the user
 * @param {string} newDirName User selected Directory Name
 * @param {*} projectType User selected project type *oneOf WATS,WAJS,CLJS,CLTS
 */
const initiateSelectedProject = (newDirName, projectType) => {
    console.log('initiate sleetced prohect--',  path.dirname(require.main.filename))
    const rootPath = process.cwd();
    const requestedDir = `${rootPath}/${newDirName}`;
    if(fs.existsSync(requestedDir)) {
        log(chalk.red(`${newDirName} already exists in rootPath, generating a temp one for the time being`))
        fs.mkdirSync(`./${projectType}-react`);
    } else {
        fs.mkdirSync(newDirName);
        // const source = `../feeder/${projectType}`;
        const source = path.combine(__dirname, 'feeder');
        copyAndMove(source, newDirName);
    }
}

module.exports = {
    initiateSelectedProject
}