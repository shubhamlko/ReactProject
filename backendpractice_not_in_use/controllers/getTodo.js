const Todo = require("../models/Todo")

exports.getTodo = async(res,req) =>{
    try{
        // //fetch all toda items from 
         const todos = await Todo.find({});

         res.status(200)
         .json({
             success : true,
             data: todos,
             message:"Entire toda data fetched"
         })
    }
    catch(err){
         console.log(err);
         console.log(err);
         res.status(500)
         .json({
             success:false,
             error:err.message,
             message: "server error"
         })
      
    }
}