import usermodel from "../../models/auth.model.js";
import bcrypt from "bcrypt"
import token from "../../utils/token.js"
const login = async (req,res)=>{

try{
        const {username,email,password} = req.body;
  
    const isuser = await usermodel.findOne({
        $or:[
            {username},{email}
        ]
    })
if(!isuser) return res.status(400).json({
    message:"user not found",
    success:false
})

const ispassword = await bcrypt.compare(password,isuser.password);
if(!ispassword) return res.status(402).json({
    message:"wrong password",
    success:false
})

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

console.log(result)
}

catch(err){
    res.status(400).json({
        message:err,
        success:false
    })
}

}

export default login