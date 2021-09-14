const fs = require('fs-extra');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const boxen = require('boxen');

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
        projectName: 'React webapp with Redux',
        projectSupport: 'Javascript(JS)',
        feederName: 'wajs-redux'
    },
    {
        projectName: 'React Web App with Redux',
        projectSupport: 'Typescript(TS)',
        feederName: 'wats-redux'
    },
    {
        projectName: 'React Web App with Redux Toolkit',
        projectSupport: 'Javascript(JS)',
        feederName: 'wajs-redux-toolkit'
    },
    {
        projectName: 'React Web App with Redux Toolkit',
        projectSupport: 'Typescript(TS)',
        feederName: 'wats-redux-toolkit'
    },
    {
        projectName: 'React Web App with Context',
        projectSupport: 'Javascript(JS)',
        feederName: 'wajs-context'
    },
    {
        projectName: 'React Web App with Context',
        projectSupport: 'Typescript(TS)',
        feederName: 'wats-context'
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
            log(chalk.redBright.bgYellow.bold(`Unable to generate the project`));
            log(chalk.redBright.bgYellow.bold(`Please find the error below`));
            log(chalk.red(`${err}`));
            return;
        }
        const m1 = chalk.greenBright.bold(`Project successfully generated`);
        const m2 = chalk.greenBright.bold(`Please navigate to ${destination}`);
        const m3 = chalk.greenBright.bold(`cd ${destination}`);
        const m4 = chalk.greenBright.bold(`run npm install`);
        const m5 = chalk.greenBright.bold(`run npm outdated`);
        const m6 = chalk.greenBright.bold(`run npm update`);
        const display = `${m1}\n \n ${m2}\n \n ${m3}\n\n ${m4}\n\n ${m5}\n\n ${m6}\n\n`
        const boxenOptions = {
            padding: 1,
            margin: 1,
            borderStyle: 'round',
            borderColor: 'green',
        };
        const msgBox = boxen(display, boxenOptions );
        log(msgBox);
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
    const n1 = chalk.cyanBright(`Seletced Template details:`);
    const n2 = chalk.cyanBright(`Directory Name: ${newDirName}`);
    const n3 = chalk.cyanBright(`Template type: ${projectType}`);
    const n4 = chalk.cyanBright(`Template support: ${projectSupport}`);
    const notify = `${n1}\n \n ${n2}\n \n ${n3}\n \n ${n4}\n \n`
    const notifyOptions = {
        padding: 1,
        margin: 1,
        borderStyle: 'round',
        borderColor: 'yellow',
    };
    const notifyBox = boxen(notify, notifyOptions );
    log(notifyBox);
    const  { feederName } = lookup[0];
    const source = `${path.dirname(require.main.filename)}/feeder/${feederName}`;
    if(fs.existsSync(requestedDir)) {
        const e1 = chalk.red(`A directory with name ${newDirName} already exists`);
        const e2 = chalk.red(`Creating a new folder now, you can rename as you wish and proceede!`);
        const display = `${e1}\n \n ${e2}\n \n`
        const boxenOptions = {
            padding: 1,
            margin: 1,
            borderStyle: 'round',
            borderColor: 'blue',
        };
        const errorBox = boxen(display, boxenOptions );
        log(errorBox);
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