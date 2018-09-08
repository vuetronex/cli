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
        spawn.on('error', (data) => {
            spin.fail(chalk.red(data.message));
            reject(chalk.red(data.message));
        });
        spawn.on('close', (data) => {
            if (data == 0) {
                spin.succeed(chalk.green('Dependencies are installed successfully...'));
                resolve();
            } else {
                spin.fail(chalk.red('Process exited with Exit Code: ' + data));
                reject();
            }
        });
    });
}