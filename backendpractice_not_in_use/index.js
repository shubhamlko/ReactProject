const express = require("express");
const app = express();



//load config from .env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;


//middleware to parse json body
app.use(express.json());

const todoRoutes = require("./routes/todos");
app.use("/api/v1" , todoRoutes)

// start server 

app.listen(PORT, () =>{
    console.log(`server start at Port no ${PORT}`)
})

//db connect

const dbConnect = require("./config/database");
dbConnect();

// default routes

 app.get("/", (req,res)=>{
     res.send("server start this is home page")
 })