import apiError from "../utils/apiError.js";
import {validationResult} from "express-validator"

const validate = (req,res,next)=>{
const err = validationResult(req)
if(!err.isEmpty()){
    return next(new apiError(400 , err.array().map(e=>e.msg).join(" , ")))
}
next()
}

export default validate