const fs = require('fs-extra');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const { log, chalk } = require('./log');

const PROJECTS_FEEDER = [
    {
        projectName: 'React Component Library',
        projectSupport: 'Javascript(JS)',
        feederName: 'cljs'
    },
    {
        projectName: 'React Component Library',
        projectSupport: 'Typescript(TS)',
        feederName: 'clts'
    },
    {
        projectName: 'React Web App',
        projectSupport: 'Javascript(JS)',
        feederName: 'wajs'
    },
    {
        projectName: 'React Web App',
        projectSupport: 'Typescript(TS)',
        feederName: 'wats'
    },
    {
        projectName: 'React webapp with basic Redux',
        projectSupport: 'Javascript(JS)',
        feederName: 'wajs-redux'
    },
    {
        projectName: 'React webapp with basic Redux',
        projectSupport: 'Typescript(TS)',
        feederName: 'wats-redux'
    }
]

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
const initiateSelectedProject = (newDirName, projectType, projectSupport) => {
    const rootPath = process.cwd();
    const requestedDir = `${rootPath}/${newDirName}`;
    const lookup  = PROJECTS_FEEDER.filter(project => project.projectName === projectType && project.projectSupport === projectSupport);
    console.log('lookup', lookup)
    const  { feederName } = lookup[0];
    const source = `${path.dirname(require.main.filename)}/feeder/${feederName}`;
    console.log('souce', source)
    if(fs.existsSync(requestedDir)) {
        log(chalk.yellow.bgBlack.bold(`A directory with name ${newDirName} already exists, creating a new folder now, you can rename as you wish and proceede!`));
        const temp = uuidv4();
        const newTempDir = `./${projectType}-react-${temp}`;
        fs.mkdirSync(newTempDir);
        copyAndMove(source, newTempDir);
    } else {
        fs.mkdirSync(newDirName);
        copyAndMove(source, newDirName);
    }
}

module.exports = {
    initiateSelectedProject
}