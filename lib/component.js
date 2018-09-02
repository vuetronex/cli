const hogan = require('hogan.js');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

module.exports = function(name) {
    let stub = fs.readFileSync(path.join(__dirname, 'stub/page.stub')).toString();
    let template = hogan.compile(stub);
    let compiled = template.render({name, type: 'Component'});
    
    let page = `${name}.vue`;
    let location = path.join(process.cwd(), `src/components/${page}`);
    if (! fs.existsSync(location)) {
        fs.writeFileSync(location, compiled);
        console.log(chalk.green(`Component Created: ${page}`));
    } else {
        console.log(chalk.red('Component already exists'));
    }
}