// dependencies
const jwt = require("jsonwebtoken");
const generateCookie = (_id, userName, email) => {
  return jwt.sign(  
    { _id, userName, email},
    process.env.JWT_SECRET,
    { expiresIn: "24h" },
  );
};
module.exports = { generateCookie };