const yargs = require("yargs");
const utils = require("./utils");
const uniqId = require("uniqid");
// node index.js add --name="Pini" --email="dfgdf@dtg.com"

yargs.command({
  command: "add",
  describe: "add new user",
  builder: {
    name: {
      describe: "user name",
      demandOptions: true,
      type: "string",
    },
    email: {
      describe: "user email",
      demandOptions: true,
      type: "string",
    },
  },
  handler(argv) {
    const user = {
      name: argv.name,
      email: argv.email,
      id: uniqId(),
    };
    utils.add(user);
  },
});

yargs.command({
  command: "remove",
  describe: "remove user",
  builder: {
    id: {
      describe: "users id",
      demandOptions: true,
      type: "string",
    },
  },
  handler(argv) {
    utils.remove(argv.id);
  },
});

yargs.command({
  command: "update",
  describe: "update user",
  builder: {
    id: {
      describe: "users id",
      demandOptions: true,
      type: "string",
    },
  },
  builder: {
    name: {
      describe: "users name",
      type: "string",
    },
  },
  builder: {
    email: {
      describe: "users email",
      type: "string",
    },
  },
  handler(argv) {
    utils.update(argv.id, argv.name, argv.email);
  },
});

yargs.command({
  command: "read",
  describe: "read user",
  builder: {
    id: {
      describe: "users id",
      demandOptions: true,
      type: "string",
    },
  },
  handler(argv) {
    utils.read(argv.id);
  },
});
yargs.parse();
