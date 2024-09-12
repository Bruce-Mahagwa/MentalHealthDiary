// dependencies
const express = require("express");
// variables
const router = express.Router();
// files
const {
    saveEntry, updateEntry
} = require("../Controllers/diaryentryController.js");

const {
    verifyIsLoggedIn
} = require("../Middleware/verifyAuthToken"); 

router.use(verifyIsLoggedIn);

router.post("/add", saveEntry);
router.put("/edit/:id", updateEntry);

module.exports = router;