import jwt from "jsonwebtoken"
import redis from "../config/redis.connect.js"

const user_auth = async(req,res,next)=>{
try{
    const token = req.cookies.token;
if(!token) return res.status(401).json({

    message:"unauthorized access! token not recieved",
    success:false
})
const findToken = await redis.get(token)
if(findToken)return res.json({
    message:"unauthorized access!",success:false
})

const decode = jwt.verify(token,process.env.KEY)
req.user = decode;

next()
}
catch(err){
    res.status(401).json({
        message:err,
        success:false
    })
}
}

export default user_auth