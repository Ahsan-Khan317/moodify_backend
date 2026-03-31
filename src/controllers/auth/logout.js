
import redis from "../../config/redis.connect.js";
import apiError from "../../utils/apiError.js";
import asyncHandler from "../../utils/asyncHandler.js";
const logout = asyncHandler(
     async(req,res)=>{


       const token = req.cookies.token;
if(!token) throw new apiError(400,"token not found")

    await redis.set(token,new Date().toLocaleDateString())


    res.clearCookie("token")

    res.status(200).json({
        message:"user logged out successfully",
        succcess:true
    })

 
    
}

)
export default logout