const chalk = require('chalk');

module.exports = function(name) {
    console.log(chalk.yellow('Get Started:'));
    console.log(chalk.blue('    cd ' + name));
    console.log(chalk.blue('    npm run watch'));
    console.log(chalk.blue('    npm start'));
    console.log(chalk.green('\nHappy Coding...\n'));
}