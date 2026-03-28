import songmodel from "../../models/song.model.js";

const get_allsong = async(req,res)=>{

   try{
     const result = await songmodel.find()


    res.status(200).json({
        message:"songs fetched successfully",
        result,
        success:true
    })
   }
   catch(err){

    res.status(400).json({
        message:err.message,
        success:false
    })

   }
}

export default get_allsong