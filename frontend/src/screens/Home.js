import React, { useState } from "react";
import Form from "../components/Form";

import Notes from "../components/Notes";

function Home() {
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState("");
  const [editItem, setEditItem] = useState(null);
  const [notes, setNotes] = useState([
    {
      id: 1,
      content: "first note",
    },
    {
      id: 2,
      content: "second note",
    },
    {
      id: 3,
      content: "third note",
    },
  ]);

  const addNoteHandler = (note) => {
    const newNotes = [note, ...notes];
    setNotes(newNotes);
  };

  const deleteNoteHandler = (id) => {
    const remainingNotes = notes.filter((note) => note.id !== id);
    setNotes([...remainingNotes]);
  };

  const updateNoteHandler = () => {
    setIsEdit(false);
    let copiedArray = [...notes];
    copiedArray[editItem] = { ...copiedArray, content: text };
    setNotes(copiedArray);
    setText("");
  };
  const editNoteHandler = (note) => {
    setIsEdit(true);
    setText(note.content);
    const noteToUpdate = notes.findIndex((item) => item.id === note.id);
    setEditItem(noteToUpdate);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl text-center pt-5">Dev Notes</h1>
      <Form
        addNoteHandler={addNoteHandler}
        isEdit={isEdit}
        text={text}
        setText={setText}
        updateNoteHandler={updateNoteHandler}
      />
      <Notes
        notes={notes}
        deleteNoteHandler={deleteNoteHandler}
        editNoteHandler={editNoteHandler}
      />
    </div>
  );
}

export default Home;
