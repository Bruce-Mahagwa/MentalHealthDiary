// dependencies
const mongoose = require("mongoose");

const DiaryEntry = new mongoose.Schema( 
  {
    entry: {
        type: String,
        required: true  
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserModel"
    },    
    tags: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "UserModel"
        } 
    ]
  },
  {timestamps: true},
);

module.exports = mongoose.model("DiaryEntryModel", DiaryEntry);