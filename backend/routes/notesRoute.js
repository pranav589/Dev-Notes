import express from "express";
import {
  getNote,
  getNotes,
  deleteNote,
  createNote,
  updateNote,
} from "../controllers/notesContoller.js";

const router = express.Router();

router.route("/").get(getNotes);
router.route("/:id").get(getNote).patch(updateNote).delete(deleteNote);

router.route("/create").post(createNote);

export default router;
