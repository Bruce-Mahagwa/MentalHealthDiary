// dependencies
const express = require("express");
// variables
const router = express.Router();
// files
const {
    saveEntry, updateEntry
} = require("../Controllers/diaryentryControllers");

const {
    verifyIsLoggedIn
} = require("../Middleware/verifyAuthToken");

router.use(verifyIsLoggedIn);

router.post("/diary", saveEntry);
router.put("/diary", updateEntry);

module.exports = router;