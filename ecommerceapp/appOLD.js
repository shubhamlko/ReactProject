const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors())


app.get("/" , cors(), (req,res) =>{

})

app.post("/" ,async(req,res) =>{
    const{email, password} = req.body

    try{
        const check = await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }

    }
    catch{

    }
})



app.post("/signup" ,async(req,res) =>{
    const{email, password} = req.body
const data = {
    email : email,
    password : password
}
    try{
        const check = await collection.findOne({email:email})

        if(check){
            res.json("exist")
            await collection.insertMany([data])
        }

    }
    catch{

    }
})
app.listen(3000, () =>{
    console.log("port connected")
})