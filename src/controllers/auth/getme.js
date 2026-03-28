import usermodel from "../../models/auth.model.js"
const getme = async(req,res)=>{

try{
const result = await usermodel.findById(req.user.userid).select("-password")


    res.status(200).json({
        result,
        message:"hello authentication done "
    })

}
catch(err){
    res.send("hello authentication error " )
}


}
export default getme