const express = require("express");
const router = express.Router();
const Users = require("../models/User");
const { body, validationResult } = require("express-validator");
router.post('/create-user',
    [
        body("name").isLength({ min: 3 }),
        body("email", "This is not a valid email").isEmail(),
        body("password", "This is not valid password").isLength({ min: 5 })
    ],

    async (req, res) => {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() });
        }
        try {
            const { name, email, password, location } = req.body;
            await Users.create(
                {
                    name,
                    email,
                    password,
                    location
                }
            )
            res.json({ success: true });
        } catch (error) {
            console.log("Facing error while creating user", error);
            res.json({ success: false });
        }
    })

module.exports = router