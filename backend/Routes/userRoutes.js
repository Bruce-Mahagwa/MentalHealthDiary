// dependencies
const express = require("express");
// variables
const router = express.Router();
// files
const {
    loginUser,
    registerUser,
    saveUserProfile,
    getUserProfile, 
    logOutUser
} = require("../Controllers/usersController");

const {
    verifyIsLoggedIn
} = require("../Middleware/verifyAuthToken");

router.post("/login", loginUser);
router.post("/register", registerUser);
router.get("/user/logout", logOutUser);

router.use(verifyIsLoggedIn); // checks for login permissions 

router.post("/user", saveUserProfile);
router.get("/user/:id", getUserProfile);


module.exports = router;