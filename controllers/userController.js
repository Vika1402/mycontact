const asyncHandler=require("express-async-handler")
const User=require("../models/user.model")
// Write a description for register a user 
// @route POSt/api/users/register
// $access public
const registerUser = asyncHandler(async(req,res)=>{
  const{username,email,phone}=req.body;
  if(!username || !email || !phone){
    res.status(400)
    throw new Error("All feild are mandatory ")
  }
  res.json({message:"register the user "})
});

// Write a description for register a user 
// @route POSt/api/users/register
// $access public
const loginUser = asyncHandler(async(req,res)=>{
  res.json({message:"Login the user "})
});
// Write a description for register a user 
// @route POSt/api/users/register
// $access public
const currentUser = asyncHandler(async(req,res)=>{
  res.json({message:"Current user info "})
});

module.exports={registerUser,loginUser,currentUser}