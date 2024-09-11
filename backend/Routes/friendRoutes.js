// dependencies
const express = require("express");
// variables
const router = express.Router();
// files
const {
    removeFriend, searchUsers, sendFriendRequest, getMyFriends, acceptFriendRequest, rejectFriendRequest
} = require("../Controllers/friendsController");

const {
    verifyIsLoggedIn
} = require("../Middleware/verifyAuthToken");

router.use(verifyIsLoggedIn);

router.get("/", getMyFriends);
router.get("/search", searchUsers);
router.post("/request", sendFriendRequest);
router.post("/accept_request", acceptFriendRequest);
router.post("/reject_request", rejectFriendRequest);
router.post("/unfriend", removeFriend);

module.exports = router;