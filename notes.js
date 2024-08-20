const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => "here is your text";

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log(chalk.green.inverse("New note added"));
  } else {
    console.log(chalk.red.inverse("Note title taken"));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const removeNote = (title) => {
  const notes = loadNotes();

  const filteredNotes = notes.filter((note) => note.title !== title);

  if (filteredNotes.length < notes.length) {
    fs.writeFileSync("notes.json", JSON.stringify(filteredNotes));
    console.log(chalk.green.inverse(`${title} has been deleted`));
  } else {
    console.log(chalk.red.inverse("No such title found"));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  if (notes.length !== 0) {
    console.log(chalk.green.inverse("Your notes: "));

    notes.forEach((note) => console.log(note.title));
  } else {
    console.log(chalk.red("No notes available"));
  }
};

const readNotes = (title) => {
  const notes = loadNotes();
  let note = notes.find((note) => note.title === title);

  if (note) {
    console.log(chalk.inverse(note.title) + ":" + note.body);
  } else {
    console.log(chalk.red.inverse("No note found"));
  }
};
module.exports = { getNotes, addNote, removeNote, listNotes, readNotes };
