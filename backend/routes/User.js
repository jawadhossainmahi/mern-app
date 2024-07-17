const express = require("express");
const router = express.Router();
const Users = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecret = "JawadHossainMahi";
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
            const { name, email, location } = req.body;
            const salt = await bcrypt.genSalt(10);
            let secPassword = await bcrypt.hash(req.body.password, salt);
            await Users.create(
                {
                    name: name,
                    email: email,
                    password: secPassword,
                    location: location
                }
            ).then(() => {
                return res.json({ success: true });
            }).catch((error) => {
                return res.json({ errors: error });
            }
            )
        } catch (error) {
            console.log("Facing error while creating user", error);
            return res.json({ success: false });
        }
    })
router.post('/login-user',
    [
        body("email", "This is not a valid email").isEmail(),
        body("password", "This is not valid password").isLength({ min: 5 })
    ],
    async (req, res) => {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() });
        }
        try {
            const { email, password } = req.body;
            let userData = await Users.findOne({
                email: email
            });
            if (!userData) {
                return res.status(400).json({ errors: "No user found" });
            }
            const passwordCompare = await bcrypt.compare(password, userData.password);
            if (!passwordCompare) {
                return res.status(400).json({ errors: "Invalid Password" });
            } else {
                const data = {
                    user: {
                        id: userData.id
                    }
                }
                const authToken = jwt.sign(data, jwtSecret);
                return res.json({ success: true, userData: userData, authToken: authToken });
            }
        } catch (error) {
            console.log("Facing error while creating user", error);
            return res.json({ success: false, errors: error });
        }
    })

module.exports = router