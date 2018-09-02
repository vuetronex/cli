const path = require('path');
const chalk = require('chalk');

module.exports = {
    bin(command) {
        return path.join(process.cwd(), 'node_modules/.bin', command).toString();
    },
    handle(error, out) {
        if (error) {
            console.log(chalk.red(error));
            
            return;
        }
        console.log(chalk.green(out));
    }
};