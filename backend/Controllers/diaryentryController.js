const connectDB = require("../config/db");
const DiaryEntryModel = require("../Models/DiaryEntryModel");
const UserModel = require("../Models/UserModel");

const saveEntry = async (req, res) => {
    try {
        await connectDB();
        const owner = req?.params?.owner;
        const {entry, createdAt, tags} = req.body;
        const new_entry = await DiaryEntryModel.create({
            entry,
            createdAt,
            tags,
            owner
        })
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
        const {entry, updatedAt, tags} = req.body;
        const entry_id = req?.params?.entry_id
        const entry_doc = await DiaryEntryModel.findById(entry_id);
        entry_doc.entry = entry;
        entry_doc.updatedAt = updatedAt;
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


module.exports = {saveEntry, updateEntry};