// dependecines
const bcrypt = require("bcryptjs");
// variables
const salt = bcrypt.genSaltSync(4);

const hashPassword = (pwd) => {
  return bcrypt.hashSync(pwd, salt)   
}
const comparePassword = (inputPwd, hashedPwd) => {
  return bcrypt.compareSync(inputPwd, hashedPwd);
}

module.exports = {
  hashPassword,
  comparePassword
}