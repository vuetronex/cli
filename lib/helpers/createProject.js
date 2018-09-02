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
            spin.stop();
            reject(chalk.red('\n\n' + data.message));
        });
        spawn.on('close', (data) => {
            spin.stop();
            if (data == 0) {
                resolve(chalk.green('\nProject created inside `' + name + '`...\n'));
            } else {
                reject(chalk.red('\n\nProcess exited with Exit Code: ' + data));
            }
        });
    });
}