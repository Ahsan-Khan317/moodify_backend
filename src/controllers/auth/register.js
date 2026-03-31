import usermodel from "../../models/auth.model.js";
import asyncHandler from "../../utils/asyncHandler.js";
import token from "../../utils/token.js";

const register = asyncHandler(
    async (req,res)=>{

    const {username,email,password} = req.body


 const result = await usermodel.create({
username,email,password

 })
const auth_token = token(result);

res.cookie("token",auth_token,{
    httpOnly:true,
    secure:true,
    sameSite:"none",
    maxAge:4*24*60*60*1000
})

res.status(201).json({
    result,
    message:"user regstered successfully",
    success:true
})


}
)
export default register