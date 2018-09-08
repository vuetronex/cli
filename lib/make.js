const createProject = require('./helpers/createProject');
const installDependencies = require('./helpers/installDependencies');
const displayGetStarted = require('./helpers/displayGetStarted');

module.exports = {
    handle(name) {
        createProject(name)
            .then(() => {
                return installDependencies(name);
            })
            .then(() => {
                displayGetStarted(name);
            })
            .catch((data) => {
                if (data) {
                    console.log(data);
                }
            });
    }
}