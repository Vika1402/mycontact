const asyncHandler=require("express-async-handler")
// Write a description for register a user 
// @route POSt/api/users/register
// $access public
const registerUser = asyncHandler(async(req,res)=>{
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