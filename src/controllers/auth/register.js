import usermodel from "../../models/auth.model.js";
import token from "../../utils/token.js";

const register = async (req,res)=>{
try{
    const {username,email,password} = req.body

const isUserAlreadyExist = await usermodel.findOne({
    $or:[
        {username},{email}
    ]
})
 if(isUserAlreadyExist) return res.status(401).json({message:"invalid credentials"});

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
catch(err){
    res.status(401).json({
    message:"user not regstered successfully"+err,
    success:false
})
}

}
export default register