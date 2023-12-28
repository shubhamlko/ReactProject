//app create
    const express = require("express");
    const app = express();

//port find out
require("dotenv").config();
const PORT = process.env.PORT || 3000





//add middleware
    app.use(express.json())
    const fileupload = require("express-fileupload")
    app.use(fileupload({
        useTempFiles: true,
        tempFileDir:"/tmp/"
    }))




//db connect
const db = require("./config/database")
db.connect();


//cloud connect
const cloudniary = require("./config/cloudinary")
cloudniary.cloudinaryConnect();


// route mount karna hai
    const Upload = require("./routes/fileUpload")
    app.use("/api/v1/upload", Upload)


//activate server
app.listen(PORT, ()=>{
    console.log(`app is running at ${PORT}`)
})

app.get("/" , () =>{
    console.log("home")
})