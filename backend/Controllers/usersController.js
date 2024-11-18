// files and functions
const {
    hashPassword,
    comparePassword,
  } = require("../Lib/passwordFunctions");

const mongoose = require("mongoose");
require('dotenv').config()  

const { generateCookie } = require("../Lib/generateCookie");
const UserModel = require("../Models/UserModel");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to db");
  } catch (e) {
    console.log("failed to connect to database"); 
    console.log(e);
    process.exit(1);
  }
};

const registerUser = async (req, res) => {
  try {
    await connectDB()
    const userName = req.body?.userName; 
    const email = req.body?.email;
    const password = req.body?.password;
    if (!(userName && email && password)) {
      return res.status(400).json({ error: "Please provide all inputs" });
    }
    const user = await UserModel.findOne({ email: email });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }
    const checkSameUsername = await UserModel.findOne({ userName: userName });
    if (checkSameUsername) {
      return res.status(400).json({
        error: "A user with that username exists. Please pick another username",
      });
    }
    const hashedPassword = hashPassword(password);
    const new_user = await UserModel.create({
      userName: userName,
      email: email,
      password: hashedPassword,
    });

    return res
      .cookie(
        "access_token",
        generateCookie(
          new_user._id,
          new_user.userName,
          new_user.email,
        ),
        { httpOnly: true, secure: true, sameSite: "None" },
      )
      .status(201)
      .json({
        message: "Congratulations!! You have been registered",
        data: {
          _id: new_user._id,
          userName: new_user.userName,
          email: new_user.email,
        },
      });
  } catch (e) {
      console.log(e)
      return res.status(404).json({
          error: "Could not register you at the moment. Please try later",
      });
  }
};

const loginUser = async (req, res) => {
  try {
    await connectDB()
    const userName = req.body?.userName;
    const password = req.body?.password;
    if (!userName || !password) {
      return res.status(400).json({ error: "All inputs are required" });
    }
    const user = await UserModel.findOne({ userName });
    if (!user) {
      return res.status(503).json({
        error: "This user name is not registered with us. Please register first",
      });
    }

    if (user && comparePassword(password, user.password)) {
      let cookieParams = {
        httpOnly: true,
        secure: true,
        sameSite: "None" 
      };        
      return res 
        .cookie(
          "access_token",
          generateCookie(user._id, user.userName, user.email),
          cookieParams,
        )
        .json({
          message: "user logged in",
          data: {
            _id: user._id,
            userName: user.userName,
            email: user.email,              
          },
        });
    } 
    else {
      return res
        .status(400)
        .json({ error: "Wrong password. Please try again" });
    }
  } catch (e) {
      console.log(e)
      return res.status(401).json({ error: "Could not login user"});
  }
};

const saveUserProfile = async (req, res) => {
  try { 
    await connectDB()
    const user = await UserModel.findById(req.user._id)
    const firstName = req.body?.firstName; 
    const lastName = req.body?.lastName;
    const highlight = req.body?.highlight;
    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;
    user.highlight = highlight || user.highlight;  
    await user.save();
    const new_user = {
      userName: user?.userName,
      firstName: user?.firstName,
      lastName: user?.lastName,
      highlight: user?.highlight
    }
    return res.status(200).json({
      data: new_user
    });
  }
  catch (e) {
    console.log(e);
    return res
      .status(404)
      .json({ error: "Could not update profile. Please try again later"});
  }
};

const getUserProfile = async (req, res) => {
  try {
    await connectDB()
    const id = req.user._id
    const user = await UserModel.findById(id).select({userName: 1, firstName: 1, lastName: 1, highlight: 1});
    return res.status(200).json({ data: user });
  } catch (e) {
    console.log(e);
    return res
      .status(404)
      .json({ error: "Could not load user profile. Please reload the page"});
  }
};

const logOutUser = (req, res) => {
  try {
    return res
      .clearCookie("access_token")
      .json({message: "You have been logged out. Come again soon!!!"});
  } 
  catch (e) {
    console.log(e)
    return res.status(500).json({ error: "Could not logout"});
  }
};

module.exports = {
  loginUser,
  registerUser,
  saveUserProfile,
  getUserProfile,
  logOutUser
};