const pluralize = require('pluralize');
const hogan = require('hogan.js');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

module.exports = function(name) {
    let tableName = pluralize(name.toLowerCase());
    let stub = fs.readFileSync(path.join(__dirname, 'stub/seed.stub')).toString();
    let template = hogan.compile(stub);
    let compiled = template.render({tableName});
    
    let seed = (new Date).getTime() + `_${tableName}.js`;
    let location = path.join(process.cwd(), `seeds/${seed}`);
    if (! fs.existsSync(location)) {
        fs.writeFileSync(location, compiled);
        console.log(chalk.green(`Seeder Created: ${seed}`));
    } else {
        console.log(chalk.red('Seeder already exists'));
    }
}