import express from "express"
import register from "../controllers/auth/register.js"
import login from "../controllers/auth/login.js"
import getme from "../controllers/auth/getme.js"
import user_auth from "../middleware/auth.js"
import logout from "../controllers/auth/logout.js"
import register_validator from "../validators/register.validator.js"
import validate from "../middleware/validate.middleware.js"
import login_validator from "../validators/login.validator.js"
const authRouter = express.Router()

authRouter.post("/register/api",register_validator,validate,register)
authRouter.post("/login/api",login_validator,validate,login)
authRouter.get("/getme",user_auth,getme)
authRouter.post("/logout/api",logout)
export default authRouter