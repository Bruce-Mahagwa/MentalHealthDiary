const connectDB = require("../config/db");
const DiaryEntryModel = require("../Models/DiaryEntryModel");
const UserModel = require("../Models/UserModel");
const mongoose = require("mongoose");

const saveEntry = async (req, res) => { 
    try {
        await connectDB();
        const owner = req.user._id;
        const owner_doc = await UserModel.findById(owner);

        const {entry, tags} = req.body;
        if (!entry || entry?.trim().length === 0) {
            return res.status(403).json({error: "Please add a diary entry"})
        }
        const new_entry = await DiaryEntryModel.create({  
            entry,  
            tags,
            owner
        })
        owner_doc.diary_entries.push(new_entry._id) // adds the id of the doc on the user model
        await owner_doc.save();

        return res.status(200).json({
            data: new_entry
        })
    }
    catch(e) { 
        console.log(e);
        return res.status(404).json({error: "Could not save diary entry at this time. Please refresh page."})
    }
}

const updateEntry = async (req, res) => {
    try {
        await connectDB();
        const entry_id = req?.params?.id
        const owner = req.user._id;

        const {entry, tags} = req.body;
        if (!entry || entry?.trim().length === 0) {
            return res.status(403).json({message: "Please add a diary entry"})
        } 
        const entry_doc = await DiaryEntryModel.findById(entry_id);
        entry_doc.entry = entry;
        entry_doc.tags = tags;

        await entry_doc.save();
        return res.status(200).json({
            data: entry_doc
        })
    }
    catch(e) {
        console.log(e);
        return res.status(404).json({error: "Could not save diary entry at this time. Please refresh page."})
    }
}
 
const getLatestEntries = async (req, res) => {
    try {
        await connectDB();
        const user_id = req.user._id;
        const entries = await UserModel.findById(user_id).populate("diary_entries").select({diary_entries: 1, _id: 0})
        entries.diary_entries.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());        
        const data = entries.diary_entries.slice(0, 10);
        return res.status(200).json({
            data: data
        })
    }
    catch(e) {
        console.log(e);
        return res.status(404).json({error: "Could not get diary entry at this time. Please refresh page."})
    }
}

const getEntries = async (req, res) => {
    try {
        await connectDB()
        const startDate = req?.query?.start;
        const endDate =  req?.query?.end;
        const user_id = req.user._id;
        const userentries = await UserModel.findById(user_id).populate({path: "diary_entries", match: {"createdAt": {$gte: startDate, $lte: endDate}}}).select({diary_entries: 1})
        userentries.diary_entries.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());        
        return res.status(200).json({
            data: userentries
        })
    }
    catch(e) {
        console.log(e);
        return res.status(404).json({error: "Could not get diary entry at this time. Please refresh page."})
    }
}

const getTaggedEntries = async (req, res) => {
    try {
        await connectDB();
        const user_id = req.user._id;
        const entries = await DiaryEntryModel.find({tags: {
            $in: [user_id]
        }}).select({entry: 1, owner: 1, createdAt: 1}).populate("owner", "userName");
        let data = [];
        await entries.forEach((entry) => {
            data.push(entry);
        })
        data.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());        
        return res.status(200).json({
            data: data
        })
    }
    catch(e) {  
        console.log(e);
        return res.status(404).json({error: "Could not get diary entry at this time. Please refresh page."})
    }
}
module.exports = {saveEntry, updateEntry, getLatestEntries, getEntries, getTaggedEntries};