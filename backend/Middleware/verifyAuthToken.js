// dependencies
const jwt = require("jsonwebtoken");

const verifyIsLoggedIn = (req, res, next) => {
  const token = req.cookies?.access_token;
  try {   
    if (!token) {
      return res.status(403).send("A token is required for authentication");
    }
    try {
      const userInfo = jwt.verify(token, process.env["JWT_SECRET"]);
      req.user = userInfo;
      next();
    } catch (e) {
      console.log(e);
      res.status(401).send("Unauthorized User");
    }
  } catch (e) {
    console.log(e);
    res.status(401).send("");
  }
};


module.exports = { verifyIsLoggedIn };