const mongoose = require("mongoose")
require("dotenv").config();


const conntectWithDB = () =>{
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology : true
    })
    .then(console.log("db connect "))
    .catch((error) =>{
        console.log("db connection me error aa rhi hai");
        console.log(error);
        process.exit(1)
    })
}

module.exports = conntectWithDB