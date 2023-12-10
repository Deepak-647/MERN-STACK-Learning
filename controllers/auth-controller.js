const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to Home page using Controllers");
  } catch (error) {
    console.log(error);
  }
};

// *-------------------------------
//* User Registration Logic 📝
// *-------------------------------
// 1. Get Registration Data: 📤 Retrieve user data (username, email, password).
// 2. Check Email Existence: 📋 Check if the email is already registered.
// 3. Hash Password: 🔒 Securely hash the password.
// 4. Create User: 📝 Create a new user with hashed password.
// 5. Save to DB: 💾 Save user data to the database.
// 6. Respond: ✅ Respond with "Registration Successful" or handle errors.

const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ msg: "email already exist" });
    }

    const userCreated = await User.create({ username, email, phone, password });
    res.status(200).json({
      msg: "Registration Successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    console.log(error);
  }
};

// *-------------------------------
//* User LogIn Logic 📝
// *-------------------------------

const login = async (req,res) =>{
try{
 const { email,password} = req.body;

 const userExist = await User.findOne({email});

 if(!userExist){
  return res.status(400).json({message: "Invalid Credentials"})
 }

  // const user = await bcrypt.compare(password,userExist.password);
   const user = await userExist.comparePassword(password);

  if(user){
    res.status(200).json({
      msg: "LogIn Successful",
      token: await userExist.generateToken(),
      userId: userExist._id.toString(),
    });
  }else{
    res.status(401).json({message: "Invalid email or password"})
  }
}catch(error){
res.status(500).json("internal server error");
}
}


module.exports = { home, register , login};
