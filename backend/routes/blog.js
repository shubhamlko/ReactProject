const express = require("express");
const router = express.Router();


//import controllers
const {createComment} = require("../controllers/commentController")
const {createPost, getAllPost} =  require("../controllers/postController")
const {likePost,unLikePost} =  require("../controllers/LikeController")

//map routes    
router.post("/comments/create", createComment);
router.post("/posts/create", createPost)
router.get("/posts" , getAllPost)
router.post("/likes/like" , likePost)
router.post("/likes/unlike" , unLikePost)



module.exports = router;