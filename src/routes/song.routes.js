import express from "express"
import upload_song from "../controllers/song/upload_song.js"
import upload from "../middleware/upload.middleware.js"
import get_allsong from "../controllers/song/get_song.js"
import get_moodsong from "../controllers/song/get_moodsong.js"
import validate from "../middleware/validate.middleware.js"
import getMoodSong_validator from "../validators/get_moodsong.validator.js"
import { uploadSongs_validator,multer_file_validator } from "../middleware/uploadSong.validator.js"

const songrouter = express.Router()

songrouter.post("/upload/song",upload.single("song"),uploadSongs_validator,validate,multer_file_validator,upload_song)
songrouter.get("/get/all_song",get_allsong)
songrouter.get("/get/mood/song/:id",getMoodSong_validator,validate,get_moodsong)
export default songrouter