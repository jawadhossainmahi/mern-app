const { type } = require("@testing-library/user-event/dist/type");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const FoodItemSchema = new Schema(
    {
        CategoryName: {
            type: String,
            required: true,
            default: null

        },
        name: {
            type: String,
            required: true,
            default: null
        },
        img: {
            type: String,
            required: true,
            default: null

        },
        options: {
            type: Array,
            default: [],
            required: true
        },
        description: {
            type: String,
            default: null
        }
    });
module.exports = mongoose.model("food-items", FoodItemSchema);