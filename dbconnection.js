const mongoose = require("mongoose");
const connectDb = async () => {
  try {
    const connect = await mongoose.connect("mongodb+srv://vicksbhai91:Iamvikas@basecluster.rfbftks.mongodb.net/mycontact-backend?retryWrites=true&w=majority&appName=basecluster");
    console.log(
      "Database Connected ",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDb;
