import express from "express";

import {
  login,
  register,
  verifiedToken,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get("/verify", verifiedToken);

export default router;
