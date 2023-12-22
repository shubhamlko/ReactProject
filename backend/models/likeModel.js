const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"posts"
    },
    user:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("likes" , likeSchema)