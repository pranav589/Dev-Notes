import jwt from "jsonwebtoken";

const verify = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json("Access Denied.");

  try {
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
      if (err) return res.status(400).json("Authorization not valid");

      req.user = user;
      next();
    });
  } catch (error) {
    res.status(400).json("Invalid token");
  }
};

export default verify;
