const error_middleware = (err,req,res,next)=>{
    return res.status(err.statusCode || 500).json({
        message:err.message || "server error",
        success:err.success || false
    })
}

export default error_middleware