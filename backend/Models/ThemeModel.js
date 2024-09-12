// dependencies
const mongoose = require("mongoose");

const Theme = new mongoose.Schema({
    theme: {
        type: String,
        required: true
    },
    entries: {
        ref: "DiaryEntryModel",
        type: mongoose.Schema.Types.ObjectId
    }
},
  {timestamps: true},
);

module.exports = mongoose.model("ThemeModel", Theme);