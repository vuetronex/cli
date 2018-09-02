const pluralize = require('pluralize');
const hogan = require('hogan.js');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const seed = require('./seed');

module.exports = function(name, command) {
    let tableName = pluralize(name.toLowerCase());
    let src = command.alter ? 'table.stub' : 'migration.stub';
    let stub = fs.readFileSync(path.join(__dirname, `stub/${src}`)).toString();
    let template = hogan.compile(stub);
    let compiled = template.render({tableName});
    
    let migration = (new Date).getTime() + `_${tableName}.js`;
    let location = path.join(process.cwd(), `migrations/${migration}`);
    if (! fs.existsSync(location)) {
        fs.writeFileSync(location, compiled);
        console.log(chalk.green(`Migration Created: ${migration}`));
    } else {
        console.log(chalk.red('Migration already exists'));
    }

    if (command.seed) {
        seed(tableName);
    }
}