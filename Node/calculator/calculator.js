const yargs = require("yargs");

yargs.version('1.1.0')


yargs.command({
    command: "add",
    describe: "adding two numbers",
    builder: {
        num1: {
            describe: "first",
            demandOptions: true,
            type: "integer",
        },
        num2: {
            describe:"second",
            demandOptions: true,
            type: "integer",
        }
    },

    handler(argv) {
        console.log(argv.num1 + argv.num2);
    },   
}
);

console.log(yargs.argv);
yargs.parse();
