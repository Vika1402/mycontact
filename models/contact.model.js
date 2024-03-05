const mongoose = require("mongoose");
const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please add the contact name "],
    },
    email: {
      type: String,
      required: [true, "plese add your email address"],
    },
    phone: {
      type: String,
      required: [true, "plese add your phone number "],
    },
  },
  { timestamp: true }
);

module.exports=mongoose.model("contact",contactSchema )