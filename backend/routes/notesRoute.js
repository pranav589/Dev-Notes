import express from "express";
import {
  getNote,
  getNotes,
  deleteNote,
  createNote,
  updateNote,
} from "../controllers/notesContoller.js";
import verify from "../middleware/auth.js";

const router = express.Router();

router.route("/", verify).get(getNotes);
router.route("/:id", verify).get(getNote).patch(updateNote).delete(deleteNote);

router.route("/create", verify).post(createNote);

export default router;
