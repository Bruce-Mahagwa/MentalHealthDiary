// dependencies
const jwt = require("jsonwebtoken");
// variables
require('dotenv').config()
const express = require("express");
const app = express();

// files
const userRoutes = require("./userRoutes");
const friendRoutes = require("./friendRoutes");
const diaryRoutes = require("./diaryEntryRoutes"); 
const UserModel = require("../Models/UserModel");

// get token
app.get("/get-token", async (req, res) => {
  try {
    const accessToken = req.cookies["access_token"];
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);    
    const user = await UserModel.findById(decoded._id).select({createdAt: 1});
    return res.status(200).json({
      token: {
        // userName: decoded.userName,
        createdAt: user.createdAt.toISOString || null
      }
    });
  }
  catch (e) {
    return res.status(401).json({ error: "Unauthorized User" });
  }
});
// middleware
app.use("/users", userRoutes);
app.use("/friends", friendRoutes);
app.use("/diary", diaryRoutes);

module.exports = app;