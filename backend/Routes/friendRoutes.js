// dependencies
const express = require("express");
// variables
const router = express.Router();
// files
const {
    removeFriend, searchUsers, sendFriendRequest, getMyFriends, acceptFriendRequest, rejectFriendRequest,
    getMyFriendRequests, getFriendRequestsSent, deleteFriendRequest
} = require("../Controllers/friendsController");

const {
    verifyIsLoggedIn
} = require("../Middleware/verifyAuthToken");

router.use(verifyIsLoggedIn);

router.get("/fetchfriends", getMyFriends);
router.post("/request/:id", sendFriendRequest);

router.get("/requests", getMyFriendRequests);
router.get("/requests_sent", getFriendRequestsSent);

router.post("/reject_request/:id", rejectFriendRequest);

router.post("/accept_request/:id", acceptFriendRequest);

router.post("/unfriend/:id", removeFriend);  

router.post("/delete_request/:id", deleteFriendRequest);

router.get("/search", searchUsers);


module.exports = router;