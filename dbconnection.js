const mongoose = require("mongoose");
const dotenv = require("dotenv");

const connectDb = async () => {
  dotenv.config(); // Load environment variables

  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI);
    
    console.log(
      "Database Connected: ",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.error("Error connecting to database:", err.message);
    process.exitCode = 1; // Set exit code to indicate an error
  }
};

module.exports = connectDb;
