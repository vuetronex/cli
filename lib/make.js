const createProject = require('./helpers/createProject');
const installDependencies = require('./helpers/installDependencies');
const displayGetStarted = require('./helpers/displayGetStarted');

module.exports = {
    handle(name) {
        createProject(name)
            .then((message) => {
                console.log(message);

                return installDependencies(name);
            })
            .then((message) => {
                console.log(message);

                displayGetStarted(name);
            })
            .catch(console.log);
    }
}