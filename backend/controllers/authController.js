import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { registerValidation, loginValidation } from "../validation.js";

//@route   POST /api/user/register
//@desc    Register a user
//@access  Public
const register = async (req, res) => {
  const { error } = registerValidation(req.body);

  if (error) return res.status(400).json(error.details[0].message);
  try {
    const userExists = await User.findOne({ email: req.body.email });

    if (userExists) return res.status(400).json("Email already exists");

    const salt = await bcrypt.genSalt(10);

    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
      userName: req.body.userName,
      email: req.body.email,
      password: hashPassword,
    });

    const savedUser = await user.save();
    res.json({ user: savedUser._id });
  } catch (error) {
    res.status(400).json(error);
  }
};

//@route   POST /api/user/login
//@desc    Login a user
//@access  Public
const login = async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).json(error.details[0].message);
  try {
    //check if email exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).json("Email doesn't exist.");

    //check if password is corrrect
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).json("Invalid Password.");

    const payload = {
      id: user._id,
      name: user.userName,
    };

    //create and assign a token
    const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
      expiresIn: "30d",
    });

    res.header("Authorization", token).send(token);
  } catch (error) {
    console.log(error);
  }
};

//@route   GET /api/user/verify
//@desc    Verify user token
//@access  Public
const verifiedToken = (req, res) => {
  try {
    const token = req.header("Authorization");
    if (!token) return res.status(401).json("Invalid token");
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, verified) => {
      if (err) return res.status(401).json("Token is not valid");
      const user = await User.findById(verified.id);

      if (!user) return res.status(401).json("Bad Request");
      return res.json(user);
    });
  } catch (error) {
    console.log(error);
  }
};

export { login, register, verifiedToken };
