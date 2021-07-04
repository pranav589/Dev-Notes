import express from "express";

import dotenv from "dotenv";
import notes from "./routes/notesRoute.js";
import auth from "./routes/authRoute.js";
import connectDB from "./config/db.js";
const app = express();

dotenv.config();
connectDB();

app.use(express.json());

//Test Route
app.get("/", (req, res) => {
  res.json(req.user);
});

app.use("/api/notes", notes);

app.use("/api/user", auth);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
