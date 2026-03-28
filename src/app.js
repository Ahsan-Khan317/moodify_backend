import dotenv from "dotenv"
dotenv.config()
import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import songrouter from "./routes/song.routes.js"
import authRouter from "./routes/auth.routes.js"


const app = express()


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
    methods:["POST","PATCH","DELETE","GET"]
}))
app.use(cookieParser())

app.use("/moodify",authRouter)
app.use("/moodify",songrouter)


export default app