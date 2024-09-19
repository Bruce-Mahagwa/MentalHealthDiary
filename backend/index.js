// dependencies
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require('dotenv').config()
// files and functions
const apiRoutes = require("./Routes/apiRoutes");

// variables
const app = express();
const PORT = 4000;
const whitelist = [
    "https://web.postman.co/",
    "https://web.postman.co",
    "http://localhost:3000/",
    "http://localhost:3000",
    "https://mental-health-diary.vercel.app"
    ]; 

const corsoptions = {
  origin: function (origin, callback) {
    if (!origin) {
      return callback(null, true);
    }
    if (whitelist.indexOf(origin) !== -1) {
      return callback(null, true);
    } 
    else {
      return callback(new Error("not allowed by cors"));
    }
  },
  credentials: true,
};

app.use(cors(corsoptions));
app.use(express.json());
app.use(cookieParser());
app.use(apiRoutes);

app.listen(PORT)