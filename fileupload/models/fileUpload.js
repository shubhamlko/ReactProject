const mongoose = require("mongoose");
const nodeMailer = require("nodemailer")

const fileSchema = new mongoose.Schema({
    name:{
        type:String,
        requeired:true
    },
    imageUrl:{
        type:String,
       
    },
    tags:{
        type:String,
        
    },
    email:{
        type:String,
    }

})

// post middleware
fileSchema.post("save" , async function(doc){
    try{
        console.log("doc" , doc)
        ///transporter
            let tranporter = nodeMailer.createTransport({
                host: process.env.MAIL_HOST,
                auth:{
                    user:process.env.MAIL_USER,
                    pass : process.env.MAIL_PASS,
                },
            })

            //send mail
            let info = await tranporter.sendMail({
                from:"shubham rawat",
                to: doc.email,
                subject: " New file Uploaded",
                html: "<h2>hello</h2><p>file uploaded</p>"
            })
    }catch(error){
        console.error(error)
    }
})

const File = mongoose.model("File", fileSchema);
module.exports = File;