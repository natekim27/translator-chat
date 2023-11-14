const express = require("express");
const cors = require("cors");
const registerRoutes = require("./routes/registerRoutes");

const app = express();
app.use(express.json());
app.use(cors());
app.use(registerRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});