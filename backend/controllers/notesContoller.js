import Note from "../models/noteModel.js";
import asyncHandler from "express-async-handler";

//@route   GET /api/notes
//@desc    Get all notes
//@access  Private
const getNotes = asyncHandler((req, res) => {
  Note.find({ user_id: req.user.id })
    .then((notes) => res.json(notes))
    .catch((err) => console.log(err));
});

//@route   GET /api/notes/:id
//@desc    Get a specific note
//@access  Private
const getNote = asyncHandler((req, res) => {
  Note.findById(req.params.id)
    .then((note) => res.json(note))
    .catch((err) => console.log(err));
});

//@route   DELETE /api/notes/:id
//@desc    Delete a note
//@access  Private
const deleteNote = asyncHandler((req, res) => {
  Note.findByIdAndDelete(req.params.id)
    .then((note) => res.json("Note Deleted"))
    .catch((err) => console.log(err));
});

//@route   POST /api/notes/create
//@desc    Post a note
//@access  Private
const createNote = asyncHandler((req, res) => {
  const newNote = new Note({
    content: req.body.content,
    user_id: req.user.id,
  });

  newNote
    .save()
    .then((note) => res.json(note))
    .catch((err) => console.log(err));
});

//@route   PATCH /api/notes/:id
//@desc    Update  a note
//@access  Private
const updateNote = asyncHandler((req, res) => {
  Note.findByIdAndUpdate(req.params.id).then((note) => {
    note.content = req.body.content;
    note
      .save()
      .then((note) => res.json(note))
      .catch((err) => console.log(err));
  });
});

export { getNote, getNotes, updateNote, deleteNote, createNote };
