const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/gofood-mern";
const mongodb = async () => {
    await mongoose.connect(mongoURI).then(() => {
        console.log("connected")
        
    }).catch((err) => {
        console.log("error:", err)
    })
};
module.exports = mongodb;
