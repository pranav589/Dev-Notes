import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
    min: 6,
  },
  email: {
    type: String,
    required: true,
    min: 6,
  },
  password: {
    type: String,
    required: true,
    min: 6,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
