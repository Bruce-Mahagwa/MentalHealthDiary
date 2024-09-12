const connectDB = require("../config/db");
const DiaryEntryModel = require("../Models/DiaryEntryModel");
const UserModel = require("../Models/UserModel");
const ThemeModel = require("../Models/ThemeModel");

const saveEntry = async (req, res) => { 
    try {
        await connectDB();
        const owner = req.user._id;

        const owner_doc = await UserModel.findById(owner);

        const {entry, tags} = req.body;
        if (!entry || entry?.trim().length === 0) {
            return res.status(403).json({message: "Please add a diary entry"})
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

const getEntries = async (req, res) => {
    try {

    }
    catch(e) {
        console.log(e);
        return res.status(404).json({error: "Could not get diary entry at this time. Please refresh page."})
    }
}
module.exports = {saveEntry, updateEntry};