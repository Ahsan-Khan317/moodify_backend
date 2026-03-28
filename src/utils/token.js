import jwt from "jsonwebtoken"

const token = (user)=>{

    return jwt.sign({userid:user._id},process.env.KEY,{expiresIn:"5d"})

}
export default token

