const express = require("express");
const db = require("../db/db");

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const { email, password, phoneNumber, language } = req.body;

        // Check if user with same email or phone number exists
        const existingUserQuery = "SELECT * FROM users WHERE email=$1 OR phone_number=$2"
        const existingUser = await db.query(existingUserQuery, [email, phoneNumber]);

        if (existingUser.rows.length > 0) {
            return res.status(400).json({ message: 'Email or phone number already exists' })
        }

        const query = "INSERT INTO users (email, password, phone_number, language) VALUES ($1, $2, $3, $4) RETURNING *";
        const values = [email, password, phoneNumber, language];

        const newUser = await db.query(query, values);
        res.json(newUser);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;