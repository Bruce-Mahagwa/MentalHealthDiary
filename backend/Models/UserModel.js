// dependencies
const mongoose = require("mongoose");

const User = new mongoose.Schema( 
  {
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {     
      type: String,
      required: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    highlight: {
      type: String,
    },
    friends: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "UserModel"
        }
    ],
    friend_requests: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "UserModel"
        }
    ]
  },
  {timestamps: true},
);

module.exports = mongoose.model("UserModel", User);