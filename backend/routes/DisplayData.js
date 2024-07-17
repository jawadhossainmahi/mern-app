const express = require("express");
const router = express.Router();
const FoodItem = require("../models/FoodItem");
const FoodCategory = require("../models/FoodCategory");


router.post("/foodData", async (req, res) => {
    try {
        let FoodItemData = await FoodItem.find({});
        let FoodCategoryData = await FoodCategory.find({});
        return res.json({ foodItems: FoodItemData, foodCategories: FoodCategoryData });
    } catch (error) {
        console.log(error);
        return res.json(error);
    }
});


module.exports = router
