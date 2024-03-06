const mongoose=require("require");

const userSchema= mongoose.Schema({
  
  userName:{
    type:String,
    required:[true,"plese add user name "]
  }
  ,email:{
    type:String,
    required:[true,"plese add user email address"],
    unique:[true,"Email address already taken "],
    
  },
  password:{
    type:String ,
    required:[true,"please add the user password "]
  }
},{timestamp:true})

module.exports = mongoose.model("User",userSchema);