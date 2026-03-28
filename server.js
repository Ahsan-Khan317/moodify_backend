import "./src/config/env.js"
import app from "./src/app.js"
import dbconnection from "./src/config/dbconnection.js"


dbconnection()

app.listen(process.env.PORT,()=>{



    console.log("server started successfully")
})
