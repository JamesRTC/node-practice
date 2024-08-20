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
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

//create remove command
yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: {
      describe: "Title to be deleted",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => notes.removeNote(argv.title),
});

yargs.command({
  command: "list",
  describe: "listing notes",
  handler() {
    notes.listNotes();
  },
});

yargs.command({
  command: "read",
  describe: "reading a note",
  builder: {
    title: {
      describe: "reading notes",
      commandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNotes(argv.title);
  },
});

yargs.parse();
