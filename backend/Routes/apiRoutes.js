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

// get token
app.get("/get-token", (req, res) => {
    try {
      const accessToken = req.cookies["access_token"];
      const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);
      return res.json({ token: decoded.userName});
    }
    catch (e) {
      return res.status(401).json({error: "Unauthorized User"});
    }
});
// middleware
app.use("/users", userRoutes);
app.use("/friends", friendRoutes);
app.use("/diary", diaryRoutes);

module.exports = app;