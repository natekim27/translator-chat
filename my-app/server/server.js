const express = require("express");
const cors = require("cors");
const registerRoutes = require("./routes/registerRoutes");
const loginRoutes = require("./routes/loginRoutes");

const app = express();
app.use(express.json());
app.use(cors());

// Incorporates routes to the express instance
app.use(registerRoutes);
app.use(loginRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});