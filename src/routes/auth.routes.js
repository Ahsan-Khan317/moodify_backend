import express from "express"
import register from "../controllers/auth/register.js"
import login from "../controllers/auth/login.js"
import getme from "../controllers/auth/getme.js"
import user_auth from "../middleware/auth.js"
import logout from "../controllers/auth/logout.js"
const authRouter = express.Router()

authRouter.post("/register/api",register)
authRouter.post("/login/api",login)
authRouter.get("/getme",user_auth,getme)
authRouter.post("/logout/api",logout)
export default authRouter