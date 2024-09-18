// dependencies
const jwt = require("jsonwebtoken");
// variables
const express = require("express");
const app = express();
const JWT_SECRET = "alovesongforbobbylong";
// files
const userRoutes = require("./userRoutes");
const friendRoutes = require("./friendRoutes");
const diaryRoutes = require("./diaryEntryRoutes");

// get tokem
app.get("/get-token", (req, res) => {
    try {
      const accessToken = req.cookies["access_token"];
      const decoded = jwt.verify(accessToken, JWT_SECRET);
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