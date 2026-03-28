import mongoose from "mongoose"

const songschema = new mongoose.Schema({
    songurl:{
        type:String,
    required:true
    },
    posterurl:{
        type:String,
        required:true
    },
    title:{
         type:String,
        required:true
    }
    ,
    mood:{
        type:String,
        enum:["happy","surprise","neutral","sad"],
        default:"Neutral"
    }
})

const songmodel = mongoose.model("songs",songschema)

export default songmodel