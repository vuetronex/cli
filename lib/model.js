const pluralize = require('pluralize');
const hogan = require('hogan.js');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const migration = require('./migration');

module.exports = function(name, command) {
    let tableName = pluralize(name.toLowerCase());
    let stub = fs.readFileSync(path.join(__dirname, 'stub/model.stub')).toString();
    let template = hogan.compile(stub);
    let compiled = template.render({name, tableName});
    
    let model = `${name}.js`;
    let location = path.join(process.cwd(), `models/${model}`);
    if (! fs.existsSync(location)) {
        fs.writeFileSync(location, compiled);
        console.log(chalk.green(`Model Created: ${model}`));
    } else {
        console.log(chalk.red('Model already exists'));
    }
    if (command.migration) {
        migration(tableName, command);
    }
}