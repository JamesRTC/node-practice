const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => "here is your text";

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNotes = notes.filter((notes) => notes.title === title);

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log(chalk.green("New note added"));
  } else {
    console.log(chalk.red("Note title taken"));
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

module.exports = { getNotes, addNote };
