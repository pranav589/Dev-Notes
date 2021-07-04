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

router.route("/").get(verify, getNotes);
router
  .route("/:id")
  .get(verify, getNote)
  .patch(verify, updateNote)
  .delete(verify, deleteNote);

router.route("/create").post(verify, createNote);

export default router;
