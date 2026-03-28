
import redis from "../../config/redis.connect.js";
const logout = async(req,res)=>{

 try{
       const token = req.cookies.token;
if(!token) return res.sttus(400).json({message:"token not found",success:false})

    await redis.set(token,new Date().toLocaleDateString())


    res.clearCookie("token")

    res.status(200).json({
        message:"user logged out successfully",
        succcess:true
    })

 }
catch(err){
    res.status(401).json({
        message:"logging out declined",
        success:false
    })
}
    
}

export default logout