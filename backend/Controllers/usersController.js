// files
const {
    hashPassword,
    comparePassword,
  } = require("../Lib/passwordFunctions");
  const { generateCookie } = require("../Lib/generateCookie");
  const UserModel = require("../Models/UserModel");
  const connectDB = require("../config/db");
  
 
  const getMyFriends = async (req, res) => {
    try {

    }
    catch(e) {
        console.log(e);
        return res.status(404).json({error: "Could not fetch your friends. Please refresh the page."})
    }
  }

  const searchUsers = async (req, res) => {
    try {

    }
    catch(e) {
        console.log(e);
        return res.status(404).json({error: 'Could not search users at the moment. Please refresh the page.'})
    }
  }
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
          success: "Congratulations!! You have been registered",
          userCreated: {
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
    //   const email = req.body?.email;
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
            success: "user logged in",
            userLoggedIn: {
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
      const user = await UserModel.findById(req.user._id); // gotten from a custom middleware
      const firstName = req.body?.firstName;
      const lastName = req.body?.lastName;
      const highlight = req.body?.highlight;
      user.firstName = firstName || user.firstName;
      user.lastName = lastName || user.lastName;
      user.highlight = highlight || user.highlight;
      await user.save();
      return res.status(200).json({
        userUpdated: {
          _id: user._id,
          userName: user.userName,
          email: user.email,
        },
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
      const { id } = req.params;
      const user = await UserModel.findById(id).select("-password");
      return res.status(200).json({ user });
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
        .send("You have been logged out. Come again soon!!!");
    } 
    catch (e) {
      console.log(e)
      return res.status(500).json({ error: "Could not logout"});
    }
  };
  
  module.exports = {
    getMyFriends,
    loginUser,
    registerUser,
    saveUserProfile,
    getUserProfile,
    logOutUser,
    searchUsers
  };