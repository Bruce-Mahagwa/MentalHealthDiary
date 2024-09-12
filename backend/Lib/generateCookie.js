// dependencies
const jwt = require("jsonwebtoken");
// variables
const JWT_SECRET = "alovesongforbobbylong";
const generateCookie = (_id, userName, email) => {
  return jwt.sign(  
    { _id, userName, email},
    JWT_SECRET,
    { expiresIn: "24h" },
  );
};
module.exports = { generateCookie };