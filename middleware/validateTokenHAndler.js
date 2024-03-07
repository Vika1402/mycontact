const asyncHandler=require("express-async-handler");
const jwt=require("jsonwebtoken");

const validateToken=asyncHandler(async(req,res,next)=>{
  let token;
  let authheader=req.headers.Authorization || req.headers.authorization;
  if(authheader && authheader.startsWith("Bearer")){
    token=authheader.split(" ")[1];
    jwt.verify(token,process.env.ACCESS_TOKEN,(err,decoded)=>{
      if(err){
        res.status(401)
        throw new Error("user is not authorised ");
      }
      req.user=decoded.user;
      next();
      
    });
    if(!token){
      res.status(401);
        throw new Error("user is not authorised ot token missing in the stage ")
      
    }
  }
})

module.exports = validateToken;