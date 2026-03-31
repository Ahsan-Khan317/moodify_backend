import songmodel from "../../models/song.model.js";
import asyncHandler from "../../utils/asyncHandler.js";
import apiError from "../../utils/apiError.js";
const get_moodsong =asyncHandler(
 async(req,res)=>{

   

    let mood = req.params.id;
if(mood == "neutral"){
    mood = "happy"
}
    
     const result = await songmodel.find({mood:mood})

     if(result.length == 0) throw new apiError(404,"sorry ! wrong mood select. you just have to select in mood [neutral,surprise,happy,sad ]")

    res.status(200).json({
        message:"songs fetched successfully",
        result,
        success:true
    })
   
}


)

export default get_moodsong