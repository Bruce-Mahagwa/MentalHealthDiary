// functions, models, files 
const UserModel = require("../Models/UserModel");
const {connectDB} = require("../config/db");
const getMyFriends = async (req, res) => {
    try {
        await connectDB();
        const user_id = req.user._id;
        const friends = await UserModel.findById(user_id).select("friends").populate("friends", {password: 0, friends: 0, friend_requests_sent:0, updatedAt: 0, diary_entries: 0, friend_requests: 0, email: 0})
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
            return res.status(403).json({error: "You have already sent a request to this person"})
        }
        friend.friend_requests.push(requester_id);
        requester.friend_requests_sent.push(friend_id)
        await friend.save();
        await requester.save();
        return res.status(200).json({
            // friend_model: friend.friend_requests,
            // requester_model: requester.friend_requests_sent,
            message: "Your friend request has been sent"
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

        if (requester_id === friend_id) {
            return res.status(403).json({error: "You cannot unfriend yourself."})
        }
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
        const requester_id = req.params.id;
        const friend_id = req.user._id;

        if (requester_id === friend_id) {
            return res.status(403).json({error: "You cannot befriend yourself."})
        }

        const friend = await UserModel.findById(friend_id);
        const requester = await UserModel.findById(requester_id);

        const is_already_friend = friend.friends.indexOf(requester_id);
        if (is_already_friend !== -1) {
            return res.status(403).json({error: "You are already friends"})
        }
        const index_of_request = friend.friend_requests.indexOf(requester_id);
        if (index_of_request !== -1) {
            friend.friend_requests.splice(index_of_request, 1);
            friend.friends.push(requester_id); //add as friend
        }
        const index_of_request_sent = requester.friend_requests_sent.indexOf(friend_id);
        if (index_of_request_sent !== -1) {
            requester.friend_requests_sent.splice(index_of_request_sent, 1);
            requester.friends.push(friend_id); // add as friend
        }
        await friend.save();
        await requester.save();
        return res.status(200).json({
            data: friend.friends
        })
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
        const friend_requests = await UserModel.findById(user_id).select("friend_requests").populate("friend_requests", {password: 0, friends: 0, friend_requests_sent:0, updatedAt: 0, diary_entries: 0, friend_requests: 0, email: 0})
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
        const friend_requests_sent = await UserModel.findById(user_id).select("friend_requests_sent").populate("friend_requests_sent", {password: 0, friends: 0, friend_requests_sent:0, updatedAt: 0, diary_entries: 0, friend_requests: 0, email: 0});
        return res.status(200).json({
            data: friend_requests_sent
        })
    }
    catch(e) {
        console.log(e);
        return res.status(404).json({error: "Could not get your friend requests sent at this time. Please refresh page."})
    }
  }

  const deleteFriendRequest = async (req, res) => {
    try {
        await connectDB();
        const potential_friend_id = req.params.id;
        const my_id = req.user._id;

        const potential_friend = await UserModel.findById(potential_friend_id);
        const me = await UserModel.findById(my_id);

        const potential_friend_index = potential_friend.friend_requests.indexOf(my_id);
        
        if (potential_friend_index !== -1) {
            potential_friend.friend_requests.splice(potential_friend_index, 1);
        }

        const my_request_index = me.friend_requests_sent.indexOf(potential_friend_id);

        if (my_request_index !== -1) {
            me.friend_requests_sent.splice(my_request_index, 1);
        }

        await potential_friend.save();
        await me.save();

        return res.status(200).json({
            my_requests: me.friend_requests_sent,
            potential_friend: potential_friend.friend_requests,
            message: "The request has been deleted"
        })
    }
    catch(e) {
        console.log(e);
        return res.status(404).json({error: "Could not delete the friend request at this time. Please refresh page."})
    }
  }


  const removeFriend = async(req, res) => {
    try {
        await connectDB();
        const requester_id = req.params.id;
        const friend_id = req.user._id

        if (requester_id === friend_id) {
            return res.status(201).json({message: "You cannot unfriend yourself"})
        }
        const friend = await UserModel.findById(friend_id);
        const requester = await UserModel.findById(requester_id);

        const index_of_friend = friend.friends.indexOf(requester_id);
        if (index_of_friend !== -1) {
            friend.friends.splice(index_of_friend, 1);
        }
        const index_of_friend_in_requester_model = requester.friends.indexOf(friend_id);
        if (index_of_friend_in_requester_model !== -1) {
            requester.friends.splice(index_of_friend_in_requester_model, 1);
        }
        
        await friend.save();
        await requester.save();
        return res.status(200).json({
            friend_model: friend.friends,
            requester_model: requester.friends
        })
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
        const user_id = req.user._id;
        const user = await UserModel.findById(user_id);
        let friends_friend_requests_friend_requests_sent = [...user.friend_requests, ...user.friend_requests_sent, ...user.friends, user_id];
        friends_friend_requests_friend_requests_sent = friends_friend_requests_friend_requests_sent.map((id) => String(id));

        // search under username, firstname and lastname 
        if (search_query?.trim().length === 0) {
            return res.status(200).json({data: []});
        }
        const re = new RegExp(search_query, "i")
        const results = await UserModel.find({$or: [
            {userName: {$regex: re}}, 
            {firstName: {$regex: re}},
            {lastName: {$regex: re}}
        ]}).select("userName highlight firstName lastName")
        
        const data = [];
        await results.forEach((user) => {
            const _id = String(user._id);
            if (friends_friend_requests_friend_requests_sent.includes(_id)) {
                // pass
            }
            else {
                data.push(user);
            }
        })
        return res.status(200).json({data: data});
    }
    catch(e) {
        console.log(e);
        return res.status(404).json({error: 'Could not search users at the moment. Please refresh the page.'})
    }
  }

  module.exports = {removeFriend, searchUsers, sendFriendRequest, getMyFriends, acceptFriendRequest, rejectFriendRequest, getMyFriendRequests, getFriendRequestsSent, deleteFriendRequest}