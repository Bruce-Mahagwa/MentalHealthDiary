// dependencies
const mongoose = require("mongoose");
// variables
const MONGO_URI = "mongodb+srv://Bruce:Bruce77@cluster0.uybllbu.mongodb.net/MentalHealthDiary?retryWrites=true&w=majority"
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("connected to db");
  } catch (e) {
    console.log("failed to connect to database");
    console.log(e);
    process.exit(1);
  }
};
module.exports = connectDB;