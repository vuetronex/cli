const ora = require('ora');
const chalk = require('chalk');
const style = require('cli-spinners');

module.exports = function (text) {
    return new ora(
        chalk.blue(text), 
        style.dots
    );
}