import songmodel from "../../models/song.model.js";
import asyncHandler from "../../utils/asyncHandler.js";
const get_allsong = asyncHandler(
async(req,res)=>{

   
     const result = await songmodel.find()


    res.status(200).json({
        message:"songs fetched successfully",
        result,
        success:true
    })

}


)
export default get_allsong