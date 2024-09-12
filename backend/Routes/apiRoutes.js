// variables
const express = require("express");
const app = express();

// files
const userRoutes = require("./userRoutes");
const friendRoutes = require("./friendRoutes");
const diaryRoutes = require("./diaryEntryRoutes");

// middleware
app.use("/users", userRoutes);
app.use("/friends", friendRoutes);
app.use("/diary", diaryRoutes);

module.exports = app;