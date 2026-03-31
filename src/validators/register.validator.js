
import { body } from "express-validator"
const register_validator = [

    body("username").trim().notEmpty().withMessage("usename should not be empty").bail(),


body("email").trim().notEmpty().withMessage("email should not be empty").bail().isEmail().withMessage("Invalid Email"),

body("password").trim().notEmpty().withMessage("password should not be empty").bail().isLength({min:5,max:12}).withMessage("your password should be btween 6 & 12 character")

]

export default register_validator


