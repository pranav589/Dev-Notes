import React, { useEffect, useState } from "react";
import { createNote, getNote, getNotes, updateNote } from "../api/notesApi";
import Form from "../components/Form";
import Notes from "../components/Notes";

function Home() {
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState("");
  const [editItem, setEditItem] = useState(null);
  const [notes, setNotes] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    const tokenData = localStorage.getItem("token_store");
    if (tokenData) {
      setToken(tokenData);
    }
  }, []);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const tokenData = localStorage.getItem("token_store");

    if (tokenData) {
      const notes = await getNotes({
        headers: { Authorization: tokenData },
      });
      setNotes(notes.data);
    }
  };

  const addNoteHandler = async (note) => {
    await createNote(note, {
      headers: { Authorization: token },
    });
    fetchNotes();
  };

  const updateNoteHandler = async () => {
    setIsEdit(false);
    await updateNote(
      editItem._id,
      { content: text },
      {
        headers: { Authorization: token },
      }
    );
    setText("");
    fetchNotes();
  };

  const editNoteHandler = async (note) => {
    setIsEdit(true);
    setText(note.content);
    const noteToEdit = await getNote(note._id, {
      headers: { Authorization: token },
    });
    setEditItem(noteToEdit.data);
  };

  const notesList = notes.map((note) => (
    <Notes
      note={note}
      fetchNotes={fetchNotes}
      editNoteHandler={editNoteHandler}
      key={note._id}
    />
  ));

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl text-center pt-5">Dev Notes</h1>
      <Form
        addNoteHandler={addNoteHandler}
        isEdit={isEdit}
        text={text}
        setText={setText}
        updateNoteHandler={updateNoteHandler}
        token={token}
      />
      {notesList}
    </div>
  );
}

export default Home;
