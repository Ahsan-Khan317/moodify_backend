import mongoose from "mongoose";

const dbconnection = ()=>{
try{
    mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("db connected successfully")
})

}
catch(err){
    console.log(err)
}


}
export default dbconnection