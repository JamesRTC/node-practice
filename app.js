const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");
yargs.version("1.1.0");

yargs.command({
  command: "add",
  describe: "add a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },

    body: {
      describe: "Command Description",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

//create remove command
yargs.command({
  command: "remove",
  describe: "remove a note",
  handler: () => console.log("Removing note"),
});
yargs.command({
  command: "list",
  describe: "listing notes",
  handler: () => console.log("Listing note"),
});
yargs.command({
  command: "read",
  describe: "reading a note",
  handler: () => console.log("Reading note"),
});

yargs.parse();
