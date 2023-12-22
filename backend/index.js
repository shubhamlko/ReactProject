const express = require("express");
const app = express();


require("dotenv").config();
const PORT = process.env.PORT || 7000

//middleware
app.use(express.json());

const blog = require("./routes/blog")

app.use("/api/v1" , blog)

const conntectWithDB = require("./config/dababase")

conntectWithDB();




app.listen(4000, () => {
    console.log(`app is running on 4000 `)
})

app.get("/", (req, res) =>{
    res.send("this is home page")
})

