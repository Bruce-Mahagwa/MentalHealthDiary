const UserModel = require("../Models/UserModel");
const connectDB = require("../config/db");

const getMyFriends = async (req, res) => {
    try {
        await connectDB();
        const user_id = req?.params?.user_id;
        const friends = await UserModel.findById(user_id).populate("friends").select("userName firstName lastName highlight")
        return res.json({data: friends});
    }
    catch(e) {
        console.log(e);
        return res.status(404).json({error: "Could not fetch your friends. Please refresh the page."})
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

  const sendFriendRequest = async (req, res) => {
    try {
        await connectDB();
        const friend_id = req.params.friend_id;
        // 
        const requester_id = req.params.requester_id;
        // 
        const friend = await UserModel.findById(friend_id);
        friend.friend_requests.push(requester_id);
        await friend.save();
  }
    catch(e) {
        console.log(e);
        return res.status(404).json({error: "Could not make friends at this time. Please refresh page."})
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

  const rejectFriendRequest = async (req, res) => {
    try {
        await connectDB();
        const requester_id = req.params.requester_id;
        // 
        const friend_id = req.params.friend_id
        // 
        const friend = await UserModel.findById(friend_id);
        const index_of_request = friend.friend_requests.indexOf(requester_id);
        if (index_of_request !== -1) {
            friend.friend_requests.splice(index_of_request, 1);
        }
        await friend.save();
    }
    catch(e) {
        console.log(e);
        return res.status(404).json({error: "Could not reject friend request at this time. Please refresh page."})
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

  module.exports = {removeFriend, searchUsers, sendFriendRequest, getMyFriends, acceptFriendRequest, rejectFriendRequest}