const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const cp = require('child_process');

const spinner = require('./spinner');

module.exports = function(name) {
    return new Promise((resolve, reject) => {
        let project = path.join(process.cwd(), name);
        if (fs.existsSync(project)) {
            reject(chalk.red('\nProject directory already exists.\n'));
            return;
        }

        let spin = spinner('Building project inside `' + name + '`...');
        spin.start();

        let spawn = cp.exec(`git clone https://github.com/vuetronex/core.git ${project}`);
        spawn.on('error', (data) => {
            spin.fail(chalk.red( data.message));
            reject();
        });
        spawn.on('close', (data) => {
            if (data == 0) {
                spin.succeed(chalk.green('Project created inside `' + name + '`...'));
                resolve();
            } else {
                spin.fail(chalk.red('Process exited with Exit Code: ' + data));
                reject();
            }
        });
    });
}