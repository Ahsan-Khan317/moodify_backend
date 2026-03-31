import usermodel from "../../models/auth.model.js"
import apiError from "../../utils/apiError.js"
import asyncHandler from "../../utils/asyncHandler.js"
const getme = asyncHandler(
    async(req,res)=>{


const result = await usermodel.findById(req.user.userid).select("-password")
if(!result)  throw new apiError(404,"user not found")

    res.status(200).json({
        result,
        message:"hello authentication done "
    })




}
)
export default getme