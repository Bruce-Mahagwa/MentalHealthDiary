// dependencies
const jwt = require("jsonwebtoken");

const verifyIsLoggedIn = (req, res, next) => {
  const token = req.cookies?.access_token;
  try {   
    if (!token) {
      return res.status(403).json({error: "You are not authenticated"});
    }
    try {
      const userInfo = jwt.verify(token, process.env["JWT_SECRET"]);
      req.user = userInfo;
      next();
    } 
    catch (e) {
      console.log(e);
      res.status(401).json({error: "Unauthorized User"});
    }
  } catch (e) {
    console.log(e);
    res.status(401).json({error: "Error login you in. Please refresh page or log in again."});
  }
};


module.exports = { verifyIsLoggedIn };