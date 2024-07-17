const { type } = require("@testing-library/user-event/dist/type");
const mongoose = require("mongoose");
const { Schema } = mongoose;


const FoodCategorySchema = new Schema(
    {
        CategoryName: {
            type: String,
            required: true,
            default: null

        }
    });
module.exports = mongoose.model("food-categories", FoodCategorySchema);