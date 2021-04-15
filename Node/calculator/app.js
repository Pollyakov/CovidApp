const yargs = require("yargs");
const users = require('./users');
const fs = require('fs');
const uniqId = require("uniqid");

//create add command
yargs.command({
    command: "add",
    describe: "adding a new user",
    builder: { 
        name:  {
            describe: 'users name',
            demandOption: true,
            type: 'string',
        }, 
        email: {
            describe: "user email",
            demandOptions: true,
            type: "string",
          },
    },
    handler (argv) {
        users.addUser();
        const user = {
            name: argv.name,
            email: argv.email,
            id: uniqId(),
          };
          users.addUser(user);
    } ,
}
);
//add remove, read, load

//console.log(process.argv[0], process.argv[1], process.argv[3]);
//yargs.parse();
