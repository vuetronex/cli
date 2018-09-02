const spinner = require('./spinner');
const path = require('path');
const chalk = require('chalk');
const cp = require('child_process');

module.exports = function(name) {
    return new Promise((resolve, reject) => {
        process.chdir(name);
        let spin = spinner('Installing dependencies. This may take a while...');
        spin.start();
        cp.execSync('rm -rf .git');
        let spawn = cp.exec('npm install');
        spawn.on('message', (data) => {
            console.log(data);
        });
        spawn.on('error', (data) => {
            spin.stop();
            reject(chalk.red(data.message));
        });
        spawn.on('close', (data) => {
            spin.stop();
            if (data == 0) {
                resolve(chalk.green('Dependencies are installed successfully...'));
            } else {
                reject(chalk.red('Process exited with Exit Code: ' + data));
            }
        });
    });
}