//import model
const Post = require("../models/postModel")
const Comment = require("../models/commentModel")

exports.createComment = async (req, res) =>{
    try{
            const {post, user , body} = req.body
            const comment = new Comment({
                post,user,body
            });

            //save the new comment into database
            const savedComment = await comment.save();

            //find the post by id, add the new comment to its comments array

            const updatedPost = await Post.findByIdAndUpdate(post, {$push: {comments: savedComment._id }}, {new:true} )
                     .populate("comments")  //populate the comments array with comment document
                     .exec();

        res.json({
            post: updatedPost,
        })
    }
    catch(error){
        return res.status(500).json({
            error:"error while creating comment"
        })
    }
}

//findByIdAndUpdate used for find the data according id
//pull used for delete
//push used for updated data and new entry