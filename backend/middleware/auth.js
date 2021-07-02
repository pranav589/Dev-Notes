import jwt from "jsonwebtoken";

const verify = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json("Access Denied.");

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json("Invalid token");
  }
};

export default verify;
