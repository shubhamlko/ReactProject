const mongoose = require("mongoose");

require("dotenv").config();

exports.connect = () =>{
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology:true
    })
    .then(console.log("db connect successfully"))
    .catch((error) =>{
        console.log("db connect me error aa rha h");
        console.error(error);
        process.exit(1)
    })
}