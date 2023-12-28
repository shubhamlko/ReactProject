const File = require("../models/fileUpload");
const cloudinary = require("cloudinary").v2

//localfileUpload ==> handler function

exports.localFileUpload = async (req, res) => {
    try {
        const file = req.files.file;
        console.log(`file mil jayegi`, file);

        let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`;

        file.mv(path, (err) => {
            console.log(err)
        })
        res.json({
            success: true,
            message: "Local File Upload successfully"
        })
    }
    catch (error) {
        console.log(error)
    }
}


function isFileTypeSupported(type, supportedTypes) {
    return supportedTypes.includes(type)
}

async function uploadFileToCloudinary(file, folder) {
    const options = { folder };
    console.log("temp file path", file.tempFilePath);
    options.resource_type = "auto";
    return await cloudinary.uploader.upload(file.tempFilePath, options)
}

//image upload 
exports.imageUpload = async (req, res) => {
    try {
        const { name, tags, email } = req.body;
        console.log(name, tags, email)


        const file = req.files.imageFile;
        console.log(file)


        //validation
        const supportedTypes = ["jpg", "jpeg", "png"]
        const fileType = file.name.split(".")[1].toLowerCase();
        console.log("file type", fileType)


        if (!isFileTypeSupported(fileType, supportedTypes)) {
            return res.status(400).json({
                success: false,
                message: "file format not supported"
            })
        }

        //file format support kr rha h 
        console.log("uploading to cloudinary",)
        const response = await uploadFileToCloudinary(file, "uploadedImages");
        console.log(response)

        //db me save krne ke liye
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl: response.secure_url
        })
        res.json({
            success: true,
            imageUrl: response.secure_url,
            message: "image uploaded succesfully"
        })

    }
    catch (error) {
        console.error(error);
        res.status(400).json({
            success: false,
            message: "someting went wrong while uploading video"
        })
    }
}

//video upload

exports.videoUpload = async (req, res) => {
    try {
        const { name, tags, email } = req.body;
        console.log(name, tags, email)
        const file = req.files.videoFile;

        //validation
        const supportedTypes = ["mp4", "mov"]
        const fileType = file.name.split(".")[1].toLowerCase();
        console.log("file type", fileType)

        if (!isFileTypeSupported(fileType, supportedTypes)) {
            return res.status(400).json({
                success: false,
                message: "file format not supported"
            })
        }

        //file format support kr rha h 
        console.log("uploading to cloudinary",)
        const response = await uploadFileToCloudinary(file, "uploadedVideo");
        console.log(response)
        //db me save krne ke liye
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl: response.secure_url
        })
        res.json({
            success: true,
            imageUrl: response.secure_url,
            message: "video uploaded succesfully"
        })


    }
    catch (error) {
        console.error(error);
        res.status(400).json({
            success: false,
            message: "someting went wrong while uploading video"
        })
    }
}