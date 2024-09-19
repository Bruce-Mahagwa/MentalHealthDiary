// dependencies
const jwt = require("jsonwebtoken");
require('dotenv').config()
const verifyIsLoggedIn = (req, res, next) => {
  const token = req.cookies?.access_token;
  try {   
    if (!token) {
      return res.status(403).json({error: "You are not authenticated. Please login first."});
    }
    try {
      const userInfo = jwt.verify(token, process.env.JWT_SECRET);
      req.user = userInfo;
      next();
    } 
    catch (e) {
      console.log(e);
      return res.status(401).json({error: "Unauthorized User"});
    }
  } 
  catch (e) {
    console.log(e);
    return res.status(401).json({error: "Error logging you in. Please refresh page or log in again."});
  }
};


module.exports = { verifyIsLoggedIn };