// dependencies
const express = require("express");
// variables
const router = express.Router();
// files
const {
    saveEntry, updateEntry, getEntries, getLatestEntries, getTaggedEntries
} = require("../Controllers/diaryentryController.js");

const {
    verifyIsLoggedIn
} = require("../Middleware/verifyAuthToken"); 

router.use(verifyIsLoggedIn);

router.post("/add", saveEntry);
router.put("/edit/:id", updateEntry);  
 
router.get("/latest", getLatestEntries)
router.get("/entries", getEntries);
router.get("/tagged", getTaggedEntries)

module.exports = router;