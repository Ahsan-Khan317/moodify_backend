import {body} from "express-validator"
import apiError from "../utils/apiError.js"
export const uploadSongs_validator = [
body("mood").notEmpty().withMessage("mood is required for upload song")
]

export const multer_file_validator = (req,res,next)=>{

    if(!req.file){
        return next(new apiError(400,"uploaded file not found"))
    }
    next()



}