import React, { useState } from "react";
import { createNote, getNote, updateNote } from "../api/api";
import Form from "../components/Form";

import Notes from "../components/Notes";

function Home() {
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState("");
  const [editItem, setEditItem] = useState(null);
  const [notes, setNotes] = useState([]);

  const addNoteHandler = async (note) => {
    const newNotes = await createNote(note);
    setNotes(newNotes.data);
  };

  const updateNoteHandler = async () => {
    setIsEdit(false);
    await updateNote(editItem._id, { content: text });
    setText("");
  };

  const editNoteHandler = async (note) => {
    setIsEdit(true);
    setText(note.content);
    const noteToEdit = await getNote(note._id);
    setEditItem(noteToEdit.data);
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
      <Notes editNoteHandler={editNoteHandler} />
    </div>
  );
}

export default Home;
