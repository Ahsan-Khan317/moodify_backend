import express from "express"
import upload_song from "../controllers/song/upload_song.js"
import upload from "../middleware/upload.middleware.js"
import get_allsong from "../controllers/song/get_song.js"
import get_moodsong from "../controllers/song/get_moodsong.js"

const songrouter = express.Router()

songrouter.post("/upload/song",upload.single("song"),upload_song)
songrouter.get("/get/all_song",get_allsong)
songrouter.get("/get/mood/song/:id",get_moodsong)
export default songrouter