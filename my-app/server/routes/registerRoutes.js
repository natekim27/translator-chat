const express = require("express");
const db = require("../db/db");

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const { email, password, phone, language } = req.body;

        const query = "INSERT INTO users (email, password, phone, language) VALUES ($1, $2, $3, $4) RETURNING *";
        const values = [email, password, phone, language];

        const newUser = await db.query(query, values);
        res.json(newUser);
    } catch (error) {
        res.status(500).send(error.message);
    }
    
});

module.exports = router;