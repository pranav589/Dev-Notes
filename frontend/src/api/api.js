import axios from "axios";

const getNotes = () => axios.get("/api/notes");

const createNote = (note) => axios.post("/api/notes/create", note);

const getNote = (id) => axios.get(`/api/notes/${id}`);

const deleteNote = (id) => axios.delete(`/api/notes/${id}`);

const updateNote = (id, updatedNote) =>
  axios.patch(`/api/notes/${id}`, updatedNote);

export { getNotes, createNote, deleteNote, updateNote, getNote };
