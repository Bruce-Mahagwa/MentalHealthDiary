// variables
const express = require("express");
const app = express();

// files
// const salesRoutes = require("./salesRoutes")
// const customerRoutes = require("./customerRoutes")
const userRoutes = require("./userRoutes");
// middleware
// app.use("/sales", salesRoutes)
// app.use("/customers", customerRoutes)
app.use("/users", userRoutes);
module.exports = app;