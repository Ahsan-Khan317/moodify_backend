import {param} from "express-validator"
const mood = ["neutral","happy","sad","surprise"]
const getMoodSong_validator = [
param("id").custom(async(value)=>{
 const result = mood.filter(e =>e == value)
 if(result.length == 0) throw new Error("Sorry! but this mood songs we don't have right now ")

})


]

export default getMoodSong_validator