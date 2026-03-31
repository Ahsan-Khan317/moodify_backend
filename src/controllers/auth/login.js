import usermodel from "../../models/auth.model.js";
import bcrypt from "bcrypt"
import token from "../../utils/token.js"
import asyncHandler from "../../utils/asyncHandler.js";
import apiError from "../../utils/apiError.js";
const login = asyncHandler(
    async (req,res)=>{

   const {username,email,password} = req.body;
  
    const isuser = await usermodel.findOne({
        $or:[
            {username},{email}
        ]
    })
if(!isuser) throw new apiError(400,"Invalid credentials")

const ispassword = await bcrypt.compare(password,isuser.password);
if(!ispassword) throw new apiError(402,"Wrong password")

const auth_token = token(isuser);

res.cookie("token", auth_token,{
    httpOnly:true,
    secure:true,
    sameSite:"none",
    maxAge:4*24*60*60*1000
})

res.status(200).json({
    result:{
        email:isuser.email,username:isuser.username
    },
    message:`${isuser.username} loggedIn successfully`,
    success:true
})




}
)

export default login