// functions, models, files 
const UserModel = require("../Models/UserModel");
const connectDB = require("../config/db");

const getMyFriends = async (req, res) => {
    try {
        await connectDB();
        const user_id = req?.params?.id;
        const friends = await UserModel.findById(user_id).populate("friends").select("userName firstName lastName highlight")
        // returns the friends document with an empty friends array if no friends are found
        return res.status(200).json({
            data: friends
            }
        );
    }
    catch(e) {
        console.log(e);
        return res.status(404).json({error: "Could not fetch your friends. Please refresh the page."})
    }
  }

  const sendFriendRequest = async (req, res) => {
    try {
        await connectDB();
        const friend_id = req?.params?.id; // the person I want to become friends with
        const requester_id = req.user._id; // req.user is set by the verifyIsLoggedIn middleware
        if (friend_id === requester_id) {
            // check if someone is trying to friend themselves
            return res.status(403).json({error: "You cannot befriend yourself."})
        }
        const friend = await UserModel.findById(friend_id);
        const requester = await UserModel.findById(requester_id);

        if (friend.friend_requests.includes(requester_id)) {
            return res.status(201).json({message: "You have already sent a request to this person"})
        }
        friend.friend_requests.push(requester_id);
        requester.friend_requests_sent.push(friend_id)
        await friend.save();
        await requester.save();
        return res.status(200).json({
            data1: friend.friend_requests,
            data2: requester.friend_requests_sent
        })
  }
    catch(e) {
        console.log(e);
        return res.status(404).json({error: "Could not send friend request at this time. Please refresh page."})
    }
  }

  const rejectFriendRequest = async (req, res) => {
    try {
        await connectDB();
        const requester_id = req.params.id;
        const friend_id = req.user._id;

        const friend = await UserModel.findById(friend_id);
        const requester = await UserModel.findById(requester_id);
        
        const index_of_request = friend.friend_requests.indexOf(requester_id);
        if (index_of_request !== -1) {
            friend.friend_requests.splice(index_of_request, 1);
        }
        const index_of_request_sent = requester.friend_requests_sent.indexOf(friend_id);
        if (index_of_request_sent !== -1) {
            requester.friend_requests_sent.splice(index_of_request_sent, 1);
        }
        await friend.save();
        await requester.save()
        return res.status(200).json({
            data1: friend.friend_requests,
            data2: requester.friend_requests_sent
        })
    }
    catch(e) {
        console.log(e);
        return res.status(404).json({error: "Could not reject friend request at this time. Please refresh page."})
    }
  }

  const acceptFriendRequest = async (req, res) => {
    try {
        await connectDB();
        const requester_id = req.params.requester_id;
        // 
        const friend_id = req.params.friend_id
        // 
        const friend = await UserModel.findById(friend_id);
        friend.friends.push(requester_id);

        const index_of_request = friend.friend_requests.indexOf(requester_id);
        if (index_of_request !== -1) {
            friend.friend_requests.splice(index_of_request, 1);
        }
        await friend.save();
    }
    catch(e) {
        console.log(e);
        return res.status(404).json({error: "Could not accept friend request at this time. Please refresh page."})
    }
  }

  const getMyFriendRequests = async (req, res) => {
    try {
        await connectDB();
        const user_id = req.user._id;
        const friend_requests = await UserModel.findById(user_id).select("friend_requests").populate("friend_requests", "userName firstName lastName highlight")
        return res.status(200).json({
            data: friend_requests
        })
    }
    catch(e) {
        console.log(e);
        return res.status(404).json({error: "Could not get your friend requests at this time. Please refresh page."})
    }
  }

  const getFriendRequestsSent = async (req, res) => {
    try {
        await connectDB();
        const user_id = req.user._id;
        const friend_requests_sent = await UserModel.findById(user_id).select("friend_requests_sent").populate("friend_requests_sent", "userName firstName lastName highlight");
        return res.status(200).json({
            data: friend_requests_sent
        })
    }
    catch(e) {
        console.log(e);
        return res.status(404).json({error: "Could not get your friend requests sent at this time. Please refresh page."})
    }
  }

  const removeFriend = async(req, res) => {
    try {
        await connectDB();
        const requester_id = req.params.requester_id;
        // 
        const friend_id = req.params.friend_id
        // 
        const friend = await UserModel.findById(friend_id);
        const index_of_friend = friend.friends.indexOf(requester_id);
        if (index_of_friend !== -1) {
            friend.friends.splice(index_of_friend, 1);
        }
        await friend.save();
    }
    catch(e) {
        console.log(e);
        return res.status(404).json({error: "Could not remove friend at this time. Please refresh page."})
    }
  }

  const searchUsers = async (req, res) => {
    try {
        await connectDB();
        const search_query = req?.query?.name;
        // search under username, firstname and lastname
        if (search_query.trim().length === 0) {
            return res.status(200).json({data: []});
        }
        const results = await UserModel.find({$or: [
            {userName: /search_query/i}, {firstName: /search_query/i}, {lastName: /search_query/i}
        ]}).select("userName highlight firstName lastName")
        const data = [];
        await results.forEach((user) => {
            data.push(user);
        })
        return res.status(200).json({data: data});
    }
    catch(e) {
        console.log(e);
        return res.status(404).json({error: 'Could not search users at the moment. Please refresh the page.'})
    }
  }

  module.exports = {removeFriend, searchUsers, sendFriendRequest, getMyFriends, acceptFriendRequest, rejectFriendRequest, getMyFriendRequests, getFriendRequestsSent}