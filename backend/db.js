const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/gofood-mern";
const mongodb = async () => {
    await mongoose.connect(mongoURI).then(() => {
        console.log("connected")
        const food_items = mongoose.model("food-items");
        food_items.find({}).toArray(function (err, data) {
            if (err) console.log(err)
            if (data) console.log(data)
        })
    }).catch((err) => {
        console.log("error:", err)
    })
};
module.exports = mongodb;
