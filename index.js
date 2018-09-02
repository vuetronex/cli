#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const program = require('commander');
const { exec } = require('child_process');
const utils = require('./lib/helpers/utils');

program.version('1.0.0').description('Vuetronex CLI');

program.command('new <name>')
    .description('Make a new `Vuetronex` project')
    .action(require('./lib/make').handle);

program.command('make:page <name>')
    .description('Create a page component')
    .action(require('./lib/page'));

program.command('make:component <name>')
    .description('Create a component')
    .action(require('./lib/component'));

program.command('make:model <name>')
    .option('-m, --migration', 'Create migration file also')
    .option('-s, --seed', 'Create seeder file also')
    .description('Create a model')
    .action(require('./lib/model'));

program.command('make:migration <name>')
    .option('-a, --alter', 'Create for alter table')
    .option('-s, --seed', 'Create a seeder file also')
    .description('Make a migration file')
    .action(require('./lib/migration'));

program.command('make:seed <name>')
    .description('Make a seeder file')
    .action(require('./lib/seed'));

program.command('migrate')
    .description('Migrate to latest')
    .action(function () {
        exec(utils.bin('knex migrate:latest'), utils.handle);
    });

program.command('migrate:rollback')
    .description('Rollback last migration')
    .action(function () {
        exec(utils.bin('knex migrate:rollback'), utils.handle);
    });

program.command('seed')
    .description('Run the seeders')
    .action(function () {
        exec(utils.bin('knex seed:run'), utils.handle);
    });

program.command('install')
    .description('Rebuild & perform Post-Install')
    .action(function () {
        exec(`vex migrate`, function(error, out) {
            utils.handle(error, out);

            exec(`vex seed`, utils.handle);
            exec(utils.bin('tailwind init tailwind.js'), utils.handle);
        });
    });

program.parse(process.argv);
if (process.argv.length == 2) {
    clear();
    console.log(
        chalk.yellow(
            figlet.textSync('Vuetronex', { horizontalLayout: 'full' })
        )
    );
    program.help();
}