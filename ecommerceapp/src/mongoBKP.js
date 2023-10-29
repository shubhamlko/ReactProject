const mongoose = require("mongose")
mongoose.connect("mongodb://localhost:27017/ecommerceportal")
    .then(() => {
        console.log(connected)
    })
    .catch(() => {
        console.log(faild)
    })

const newSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const collection = mongoose.modal("collection" , newSchema)

module.export = collection