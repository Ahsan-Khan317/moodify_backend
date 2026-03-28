import songmodel from "../../models/song.model.js";

const get_moodsong = async(req,res)=>{

   try{

    let mood = req.params.id;
if(mood == "neutral"){
    mood = "happy"
}
    
     const result = await songmodel.find({mood:mood})


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

export default get_moodsong