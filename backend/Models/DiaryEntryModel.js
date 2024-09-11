// dependencies
const mongoose = require("mongoose");

const DiaryEntry = new mongoose.Schema( 
  {
    entry: {
        type: String,
        required: true
    },
    createdAt: {
        type: mongoose.Schema.Types.ObjectId
    },
    tags: [
        {
            userName: {
                type: String
            },
            userId: {
                type: mongoose.Schema.Types.ObjectId
            }
        }
    ]
  },
  {timestamps: true},
);

module.exports = mongoose.model("DiaryEntryModel", DiaryEntry);