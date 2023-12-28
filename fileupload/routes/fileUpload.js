const express = require("express");
const router = express.Router();

//const {imageUpload, videoUpload, imageReducerUpload, localFileUpload} = require("../controllers/fileupload")
const {localFileUpload ,imageUpload ,videoUpload} = require("../controllers/fileupload")


router.post("/localFileUpload" , localFileUpload)
router.post("/imageUpload" , imageUpload)
router.post("/videoUpload" , videoUpload)
module.exports = router;