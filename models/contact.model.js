const mongoose = require("mongoose");
const contactSchema = mongoose.Schema(
  {
    user_id:{
      type:mongoose.Schema.Types.ObjectId,
      required:true,
      ref:"User"
    },
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