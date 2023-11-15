const express = require("express");
const db = require("../db/db");

const router = express.Router();

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const query = "SELECT * FROM users WHERE email=$1 AND password=$2"
        const values = [email, password]

        const loggedInUser = await db.query(query, values);

        // Check if user exists
        if (loggedInUser.rows.length == 0) {
            return res.status(400).json({ message: 'The email or password are incorrect' })
        }

        res.status(200).send(loggedInUser.rows);
    } catch (error) {
        res.status(400).json({message: "Error"});
    }
});

module.exports = router;