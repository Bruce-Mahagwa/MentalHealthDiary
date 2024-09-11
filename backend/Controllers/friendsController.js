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
        
    }
    catch(e) {
        console.log(e);
        return res.status(404).json({error: 'Could not search users at the moment. Please refresh the page.'})
    }
  }

  const sendFriendRequest = async (req, res) => {
    try {

    }
    catch(e) {
        console.log(e);
        return res.status(404).json({error: "Could not make friends at this time. Please refresh page."})
    }
  }

  const removeFriend = async(req, res) => {
    try {

    }
    catch(e) {
        console.log(e);
        return res.status(404).json({error: "Could not remove friend at this time. Please refresh page."})
    }
  }

  module.exports = {removeFriend, searchUsers, sendFriendRequest, getMyFriends}