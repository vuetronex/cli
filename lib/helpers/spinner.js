const CLI = require('clui');
const chalk = require('chalk');

module.exports = function (text) {
    return new CLI.Spinner(
        chalk.blue(text), 
        ['⣾','⣽','⣻','⢿','⡿','⣟','⣯','⣷']
    );
}