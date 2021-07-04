import axios from "axios";

const getNotes = (headerData) => axios.get("/api/notes", headerData);

const createNote = (note, headerData) =>
  axios.post("/api/notes/create", note, headerData);

const getNote = (id, headerData) => axios.get(`/api/notes/${id}`, headerData);

const deleteNote = (id, headerData) =>
  axios.delete(`/api/notes/${id}`, headerData);

const updateNote = (id, updatedNote, headerData) =>
  axios.patch(`/api/notes/${id}`, updatedNote, headerData);

export { getNotes, createNote, deleteNote, updateNote, getNote };
