const jwt = require("jsonwebtoken");
const User = require("../models/user-model")

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
  }
  console.log("token from auth middleware", token);

  //getting the token only by removing Bearer and space
  const jwtToken = token.replace("Bearer", "").trim();
  console.log("token without Bearer ", jwtToken);

  try {
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
    console.log(isVerified);


    const userData = await User.findOne({email : isVerified.email}).select({password :0})
    console.log("user data",userData)

    req.user =userData;
    req.token =token;
    req.UserID =userData._id;

    next();
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Unauthorized HTTP , Token not provided" });
  }
};
module.exports = authMiddleware;
